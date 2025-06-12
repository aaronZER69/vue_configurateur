export default function anglesArrondis(dimensions) {
    const { rayonSupGauche, rayonSupDroit, rayonInfGauche, rayonInfDroit } = dimensions
    const total = rayonSupGauche + rayonSupDroit + rayonInfGauche + rayonInfDroit
    return total > 0 ? 1.5 : 0
}
