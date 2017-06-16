import $                                from 'jquery'
import NetworkCanvas                    from './modules/network-canvas'
import NetworkSvg                       from './modules/network-svg'

const $network = $('.network')
if ($network.length > 0) {
    if ($network.data('svg') === true) {
        const networkSvg = new NetworkSvg()
        networkSvg.init()
    } else {
        const networkCanvas = new NetworkCanvas()
        networkCanvas.init()
    }
}
