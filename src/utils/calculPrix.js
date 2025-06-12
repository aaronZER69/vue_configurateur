import calculSurface from './calculSurface.js'
import Matiere from './matiere.js'
import Laser from "./laser.js";
import additional from "./additional.js";


export default function calculPrix({ shape, dimensions, material, thickness, quantity }) {
    const surface = calculSurface(shape, dimensions)
    const prixMatiere = Matiere(material, thickness) * surface
    const prixDecoupe = Laser(shape, dimensions)
    const extras = additional(dimensions, thickness)


    const prixUnitaire = prixMatiere + prixDecoupe + extras
    return prixUnitaire * quantity
}
