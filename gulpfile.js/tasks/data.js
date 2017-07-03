var fs           = require("fs");
var join         = require('path').join;
var config       = require('../config');
var csv          = require('csv-parser');

function sortData(data) {
    var entries = new Array();
    var ids = new Array();
    for(var i = 0; i < data.length; i++) {
        var fromHasBeen = false;
        var toHasBeen = false;
        for(var j = 0; j < entries.length; j++) {
            if (entries[j].name === data[i]['from']) {
                fromHasBeen = true
                entries[j].total_sent += parseInt(data[i]['total'], 10)
                entries[j].to.push({
                    'id': null,
                    'name': data[i]['to'],
                    'value': parseInt(data[i]['total'], 10)
                })
            }

            if (entries[j].name === data[i]['to']) {
                toHasBeen = true
                entries[j].total_received += parseInt(data[i]['total'], 10)
                entries[j].from.push({
                    'id': null,
                    'name': data[i]['from'],
                    'value': parseInt(data[i]['total'], 10)
                })
            }
        }
        if (!fromHasBeen) {

            entries.push({
                'id': null,
                'name': data[i]['from'],
                'total_sent': parseInt(data[i]['total'], 10),
                'total_received': 0,
                'to': [
                    {
                        'id': null,
                        'name': data[i]['to'],
                        'value': parseInt(data[i]['total'], 10)
                    }
                ],
                'from': []
            });
        }

        if (!toHasBeen) {
            entries.push({
                'id': null,
                'name': data[i]['to'],
                'total_sent': 0,
                'total_received': parseInt(data[i]['total'], 10),
                'to': [],
                'from': [
                    {
                        'id': null,
                        'name': data[i]['from'],
                        'value': parseInt(data[i]['total'], 10)
                    }
                ]
            })
        }
    }

    entries.sort(function(a, b) {
        return (a.name > b.name) - (a.name < b.name)
    });

    for (var m = 0; m < entries.length; m++) {
        entries[m].id = m
        ids[m] = entries[m].name
    }

    for(var k = 0; k < entries.length; k++) {
        for(var l = 0; l < entries[k].to.length; l++) {
            entries[k].to[l].id = ids.indexOf(entries[k].to[l].name);
        }
        for(var m = 0; m < entries[k].from.length; m++) {
            entries[k].from[m].id = ids.indexOf(entries[k].from[m].name);
        }
    }


    fs.writeFile(join(config.scripts.src, 'data/network.json'), JSON.stringify(entries), function(err) {
        console.log(err);
    });
}

module.exports = {
    sort: function() {
        fs.stat(join(config.scripts.src, 'data/data.json'), function(err, stat) {
            if(err == null) {
                fs.readFile(join(config.scripts.src, 'data/data.json'), 'utf8', function(err, data) {
                    data = JSON.parse(data);
                    
                    sortData(data)
                });
            } else {
                var csvData = [];
                fs.createReadStream(join(config.scripts.src, 'data/data.csv'))
                    .pipe(csv())
                    .on('data', function (data) {
                        csvData.push(data);
                    })
                    .on('end', function () {
                        sortData(csvData);
                    });
            }
        }); 
    }
};
