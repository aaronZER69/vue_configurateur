export default function calculBoundingBox(forme, dimensions) {
    switch (forme) {
        case 'rectangle':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteur
            }

        case 'rectangle_incline':
            return {
                width: dimensions.base,
                height: Math.max(dimensions.hauteurGauche, dimensions.hauteurDroite)
            }

        case 'triangle_isocele':
            return {
                width: dimensions.base,
                height: dimensions.hauteur
            }

        case 'triangle_rectangle':
            return {
                width: dimensions.base,
                height: dimensions.hauteur
            }

        case 'trapeze':
            return {
                width: Math.max(dimensions.base, dimensions.haut),
                height: dimensions.hauteur
            }

        case 'parallelogramme':
            return {
                width: dimensions.base,
                height: dimensions.hauteur
            }

        case 'hexagone':
            return {
                width: 2 * dimensions.cote,
                height: Math.sqrt(3) * dimensions.cote
            }

        case 'octogone': {
            const r = dimensions.cote / (2 * Math.sin(Math.PI / 8))
            return {
                width: 2 * r,
                height: 2 * r
            }
        }

        case 'polygone':
            return {
                width: 2 * dimensions.rayon,
                height: 2 * dimensions.rayon
            }

        case 'rectangle_arrondi':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteur
            }

        case 'rond':
            return {
                width: dimensions.diametre,
                height: dimensions.diametre
            }

        case 'demi_cercle':
            return {
                width: dimensions.diametre,
                height: dimensions.diametre / 2
            }

        case 'quart_de_cercle':
            return {
                width: dimensions.rayon,
                height: dimensions.rayon
            }

        case 'anneau':
            return {
                width: dimensions.diametre,
                height: dimensions.diametre
            }

        case 'oeuf':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteur
            }

        case 'ovale':
        case 'ovale_plat':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteur
            }

        case 'arche':
            return {
                width: dimensions.largeurBase,
                height: dimensions.hauteurBase + dimensions.rayon
            }

        case 'baril':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteur
            }

        case 'coeur':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteur
            }

        case 'fleche':
            return {
                width: Math.max(dimensions.longueurBase, dimensions.largeurTete),
                height: dimensions.hauteurBase + dimensions.hauteurTete
            }

        case 'etoile':
            return {
                width: 2 * dimensions.rayonExterieur,
                height: 2 * dimensions.rayonExterieur
            }

        case 'goutte':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteur
            }

        case 'cerf_volant':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteurMax
            }

        case 'diamant':
            return {
                width: dimensions.largeur,
                height: dimensions.hauteur
            }

        default:
            return { width: 0, height: 0 }
    }
}
