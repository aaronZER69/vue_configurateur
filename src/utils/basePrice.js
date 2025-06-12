import calculSurface from './calculSurface.js'
import Matiere from './matiere.js'
import Laser from './laser.js'

export default function calculPrix({ shape, dimensions, material, thickness, quantity }) {
    const surface = calculSurface(shape, dimensions)
    const prixMatiere = Matiere(material, thickness) * surface
    const prixDecoupe = Laser(shape, dimensions)


    const prixUnitaire = prixMatiere + prixDecoupe
    return prixUnitaire * quantity
}
