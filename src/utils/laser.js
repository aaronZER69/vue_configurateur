export default function Laser(forme, dimensions) {
    switch (forme) {
        case 'rectangle':
            return 2 * (dimensions.largeur + dimensions.hauteur) * 0.01

        case 'rond':
            return Math.PI * dimensions.diametre * 0.01

        case 'triangle_isocele':
        case 'triangle_rectangle':
        case 'trapeze':
            return 3 * dimensions.base * 0.01

        case 'polygone':
            return dimensions.nbCotes * 2 * dimensions.rayon * Math.sin(Math.PI / dimensions.nbCotes) * 0.01

        default:
            return 1.5 // forfait minimum
    }
}
