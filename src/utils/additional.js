import chanfrein from './chanfrein.js'
import getTrous from './trous.js'
import getRoundedPolygonOutside from './anglesArrondis.js'
import moGrossEpassior from './moGrossEpassior.js'

export default function additional(options, dimensions, epaisseur) {
    return (
        chanfrein(options.chanfrein) +
        getTrous(options.getTrous) +
        getRoundedPolygonOutside(dimensions) +
        moGrossEpassior(epaisseur)
    )
}
