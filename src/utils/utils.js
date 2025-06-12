export function arrondi(valeur, precision = 2) {
    return Math.round(valeur * Math.pow(10, precision)) / Math.pow(10, precision)
}

export function degToRad(deg) {
    return (deg * Math.PI) / 180
}
