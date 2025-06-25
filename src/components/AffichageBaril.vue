<template>
  <svg
      :width="affichageLargeur"
      :height="hauteur"
      :viewBox="`${-rayon - marge} 0 ${2 * (rayon + marge)} ${hauteur}`"
      style="background-color: #242424"
  >
    <path
        :d="barilPath"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageBaril',
  props: {
    hauteur: { type: Number, required: true },
    rayon: { type: Number, required: true }
  },
  computed: {
    marge() {
      return this.rayon * 0.3 // marge visuelle pour les courbes
    },
    affichageLargeur() {
      // largeur visible à l’écran (tu peux fixer à 300 par exemple)
      return 300
    },
    barilPath() {
      const r = this.rayon
      const h = this.hauteur
      const offset = r * 0.3
      const cx = 0

      return `
        M ${cx - r},0
        C ${cx - r - offset},${h / 3} ${cx - r - offset},${(2 * h) / 3} ${cx - r},${h}
        L ${cx + r},${h}
        C ${cx + r + offset},${(2 * h) / 3} ${cx + r + offset},${h / 3} ${cx + r},0
        Z
      `
    }
  }
}
</script>
