// /utils/trous.js
export function getTrous({ option, coin, perso, largeur, hauteur }) {
    const trous = []
    const r = 6;
    const margin = 10
    if (!option) return trous

    if (option === 'coins') {
        return [
            { x: margin, y: margin, r },                                // coin haut gauche
            { x: largeur - margin, y: margin, r },                      // coin haut droit
            { x: margin, y: hauteur - margin, r },                      // coin bas gauche
            { x: largeur - margin, y: hauteur - margin, r }             // coin bas droit
        ]
    }

    if (option === '2angles_largeur') {
        const d = coin.distance * 10
        const r = coin.diametre
        trous.push(
            { x: d, y: d, r },
            { x: largeur - d, y: d, r }
        )
    }

    if (option === '2angles_longueur') {
        const d = coin.distance * 10
        const r = coin.diametre
        trous.push(
            { x: d, y: d, r },
            { x: d, y: hauteur - d, r }
        )
    }

    if (option === 'perso') {
        trous.push(
            ...perso.map(t => ({
                x: t.x,
                y: hauteur - t.y,
                r: t.diametre / 2
            }))
        )
    }

    return trous
}
