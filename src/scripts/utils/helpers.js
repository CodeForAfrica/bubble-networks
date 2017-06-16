function hexToRGB(hex, alpha = 1) {
    let r = null
    let g = null
    let b = null
    if (hex.length === 4) {
        r = parseInt(hex.slice(1, 2) + '' + hex.slice(1, 2), 16)
        g = parseInt(hex.slice(2, 3) + '' + hex.slice(2, 3), 16)
        b = parseInt(hex.slice(3, 4) + '' + hex.slice(3, 4), 16)
    } else {
        r = parseInt(hex.slice(1, 3), 16)
        g = parseInt(hex.slice(3, 5), 16)
        b = parseInt(hex.slice(5, 7), 16)
    }
    
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
}

export default hexToRGB
