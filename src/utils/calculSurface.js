export default function calculSurface(forme, dimensions) {
    switch (forme) {
        case 'rectangle':
            return dimensions.largeur * dimensions.hauteur

        case 'rond':
            const r = dimensions.diametre / 2
            return Math.PI * r * r

        case 'triangle_isocele':
        case 'triangle_rectangle':
            return (dimensions.base * dimensions.hauteur) / 2

        case 'trapeze':
            return ((dimensions.base + dimensions.haut) / 2) * dimensions.hauteur

        case 'parallelogramme':
            return dimensions.base * dimensions.hauteur

        case 'hexagone':
            return ((3 * Math.sqrt(3)) / 2) * Math.pow(dimensions.cote, 2)

        case 'octogone':
            return 2 * (1 + Math.sqrt(2)) * Math.pow(dimensions.cote, 2)

        case 'polygone':
            return (dimensions.nbCotes * Math.pow(dimensions.rayon, 2) * Math.sin((2 * Math.PI) / dimensions.nbCotes)) / 2

        case 'demi_cercle':
            return (Math.PI * Math.pow(dimensions.diametre / 2, 2)) / 2

        case 'quart_de_cercle':
            return (Math.PI * Math.pow(dimensions.rayon, 2)) / 4

        case 'anneau':
            const re = dimensions.diametre / 2
            const ri = dimensions.diametreInterieur / 2
            return Math.PI * (re * re - ri * ri)

        case 'etoile':
            return (dimensions.nbBranches * Math.sin((2 * Math.PI) / dimensions.nbBranches) * dimensions.rayonExterieur * dimensions.rayonInterieur) / 2

        // formes complexes approximées
        default:
            return 0
    }
}
