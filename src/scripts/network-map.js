import $                                from 'jquery'
import * as d3                          from 'd3'
import NetworkCanvas                    from './modules/network-canvas'
import NetworkSvg                       from './modules/network-svg'
import {sortData}                         from './utils/helpers'

const $network = $('.network')
d3.csv(window.location.origin + '/data/data.csv', (error, rawData) => {
    if (error) {
        console.log(error)
    } else {
        const data = sortData(rawData)
        if ($network.length > 0) {
            if ($network.data('svg') === true) {
                const networkSvg = new NetworkSvg(data)
                networkSvg.init()
            } else {
                const networkCanvas = new NetworkCanvas(data)
                networkCanvas.init()
            }
        }
    }
})
