import chanfrein from './chanfrein.js'
import trous from './trous.js'
import getRoundedPolygonOutside from './anglesArrondis.js'
import moGrossEpassior from './moGrossEpassior.js'

export default function additional(options, dimensions, epaisseur) {
    return (
        chanfrein(options.chanfrein) +
        trous(options.trous) +
        getRoundedPolygonOutside(dimensions) +
        moGrossEpassior(epaisseur)
    )
}
