import chanfrein from './chanfrein.js'
import trous from './trous.js'
import anglesArrondis from './anglesArrondis.js'
import moGrossEpassior from './moGrossEpassior.js'

export default function additional(options, dimensions, epaisseur) {
    return (
        chanfrein(options.chanfrein) +
        trous(options.trous) +
        anglesArrondis(dimensions) +
        moGrossEpassior(epaisseur)
    )
}
