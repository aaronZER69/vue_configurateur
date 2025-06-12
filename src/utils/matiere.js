export default function Matiere(matiere, epaisseur) {
    const basePrix = {
        acier: 0.05,
        alu: 0.07,
        inox: 0.10
    }

    const coef = epaisseur / 5 // ex : 5mm → coef 1 ; 10mm → coef 2

    return basePrix[matiere] * coef
}
