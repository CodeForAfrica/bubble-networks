# Bubble Network

Bubble Network is a tool based on [D3.js](https://d3js.org/) for generating an interactive network diagram of bilateral data. It visualises sending/receiving data between a number of entities and allows the user to explore that data in more detail. It is desktop optimised but also works on mobile. 


## Usage

```html
<div class="network" 
    data-key-titles='["Sending","Receiving"]'
    data-text-before-total='["Sends","Receives"]' 
    data-text-after-total='["transactions to", "transactions from"]' 
    data-text-after-total-singular='["transaction to", "transaction from"]' 
    data-node-type-text="countries" 
    data-node-type-text-singular="country"
    data-svg="false" 
    data-key-colors='["#2353aa","#ae7ea2"]' 
    data-key-colors-selected='["#427c88","#cf7a00"]'
    data-color-lines="#d8d8d8" 
    data-color-lines-hover="#a5a5a5" 
    data-color-background="#EAEAEA" 
    data-instructions="Click on a country to see the connections">
</div>
<script src="https://cdn.jsdelivr.net/gh/CodeForAfrica/bubble-network/dist/javascript/network-map.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/CodeForAfrica/bubble-network/dist/css/index.css" />
```

![bubble-network-screenshot](https://user-images.githubusercontent.com/1282239/27590847-deec8762-5b47-11e7-816a-5e79ab66bd4f.png)
![bubble-network-screenshot](https://user-images.githubusercontent.com/1282239/27590848-df0a6c64-5b47-11e7-8355-9d21d62a4d9c.png)
![bubble-network-screenshot](https://user-images.githubusercontent.com/1282239/27590849-df171158-5b47-11e7-8a3e-4d9819b5e984.png)
![bubble-network-screenshot](https://user-images.githubusercontent.com/1282239/27590850-df191994-5b47-11e7-906a-0538c974d8f9.png)


## API Reference

Bubble Network uses [data attributes](https://developer.mozilla.org/en/docs/Web/Guide/HTML/Using_data_attributes) to provide configuration options. Data should be loaded from a csv file with the headings `from`, `to` and `total` or a JSON file of objects with fields `from`, `to` and `total`. Listed below are required and optional data attributes you can set to configure Bubble Network.

### data-key-titles [required]

#### Description

An array of length 2 containing the strings that should be used for the toggle at the top of the diagram

#### Examples

```html
data-key-titles='["Sending","Receiving"]'
```

### data-text-before-total [required]

#### Description

An array of length 2 containing the strings that are the first part of the text that appears when a node is selected. The first item in the array is for the default mode, the second item in the array is for the toggled mode. Used in conjunction with `data-text-after-total`, `data-text-after-total-singular`, `data-node-type-text` and `data-node-type-text-singular` in the format:

`data-text-before-total` TOTAL `data-text-after-total(-singular)` NODE_COUNT `data-node-type-text(-singular)`

#### Examples

```html
data-text-before-total='["Sends","Receives"]'
```

### data-text-after-total [required]

#### Description

An array of length 2 containing the strings that are the mid part of the text that appears when a node is selected. The first item in the array is for the default mode, the second item in the array is for the toggled mode. Used in conjunction with `data-text-after-total`, `data-text-after-total-singular`, `data-node-type-text` and `data-node-type-text-singular` in the format:

`data-text-before-total` TOTAL `data-text-after-total(-singular)` NODE_COUNT `data-node-type-text(-singular)`

#### Examples

```html
data-text-after-total='["transactions to", "transactions from"]'
```

### data-text-after-total-singular [required]

#### Description

Singular version of `data-text-after-total`. Used when the TOTAL is equal to 1.

#### Examples

```html
data-text-after-total-singular='["transaction to", "transaction from"]'
```

### data-node-type-text [required]

#### Description

An array of length 2 containing the strings that are the end part of the text that appears when a node is selected. The first item in the array is for the default mode, the second item in the array is for the toggled mode. Used in conjunction with `data-text-after-total`, `data-text-after-total-singular`, `data-node-type-text` and `data-node-type-text-singular` in the format:

`data-text-before-total` TOTAL `data-text-after-total(-singular)` NODE_COUNT `data-node-type-text(-singular)`

#### Examples

```html
data-node-type-text='countries'
```

### data-node-type-text-singular [required]

#### Description

Singular version of `data-node-type-text`. Used when the TOTAL is equal to 1.

#### Examples

```html
data-node-type-text-singular='country'
```

### data-svg [optional]

#### Description

By default the lines in the network map will be rendered using canvas. Set `data-svg` to `true` to change this to svg.

#### Examples

```html
data-svg="true"
data-svg="false"
```

### data-key-colors [optional]

#### Description

An array of length 2 containing hex code strings for the default colours for the nodes. The first element of the array is the default node colour. The second element is the toggled node colour.

#### Default

```html
data-key-colors='["#2353aa","#ae7ea2"]'
```

### data-key-colors-selected [optional]

#### Description

An array of length 2 containing hex code strings for the hover and selected colours for the nodes. The first element of the array is the default node colour. The second element is the toggled node colour.

#### Default

```html
data-key-colors-selected='["#0c2e6d","#901772"]'
```


### data-color-lines [optional]

#### Description

A hex code string for the linking line color.

#### Default

```html
data-color-lines="#d8d8d8" 
```

### data-color-lines-hover [optional]

#### Description

A hex code string for the alternative linking line color - this is the color of a line when its node is hovered.

#### Default

```html
data-color-lines-hover="#a5a5a5" 
```

### data-color-background [optional]

#### Description

A hex code string for the background color of the network map.

#### Default

```html
data-color-background="#EAEAEA" 
```

### data-instructions [optional]

#### Description

Instructional text to appear at the top of the map

#### Examples

```html
data-instructions="Click on a country to see the connections"
```


## Setup instructions

1) Clone the repository:

```
git clone https://github.com/CodeForAfrica/bubble-network
cd bubble-network
```

2) Download dependencies:

```
npm install
```

3) Prepare your data, by replacing the file at `/src/scripts/data/transactions.csv` with a csv file with the headings `from`, `to` and `total` or add a JSON file of objects with fields `from`, `to` and `total` at `/src/scripts/data/transactions.json` and run:

```
gulp data
```

4) Compile, set up a server and watch for changes:

```
gulp 
```


## Browser support

### Desktop browsers

+ Chrome 54 and 55.
+ Firefox 45 (ESR), 49 and 50.
+ Safari 9 and 10.
+ Edge 13 and 14.
+ Internet Explorer 11.

### Mobile browsers

+ Chrome for Android 54.
+ Chrome & Safari for iOS 9 and 10.
