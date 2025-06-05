<template>
  <svg :width="taille" :height="taille" style="border:1px solid #ccc">
    <polygon
        :points="points"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageOctogone',
  props: {
    cote: { type: Number, required: true }
  },
  computed: {
    rayon() {
      // Rayon du cercle inscrit dans lequel s'inscrit l'octogone
      return this.cote / (2 * Math.sin(Math.PI / 8))
    },
    taille() {
      return 2 * this.rayon
    },
    points() {
      const cx = this.rayon
      const cy = this.rayon
      const points = []
      for (let i = 0; i < 8; i++) {
        const angle = (2 * Math.PI * i) / 8 - Math.PI / 8
        const x = cx + this.rayon * Math.cos(angle)
        const y = cy + this.rayon * Math.sin(angle)
        points.push(`${x},${y}`)
      }
      return points.join(' ')
    }
  }
}
</script>
