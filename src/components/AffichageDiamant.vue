<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
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
  name: 'AffichageDiamant',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  },
  computed: {
    points() {
      const w = this.largeur
      const h = this.hauteur
      const tableWidth = w * 0.6
      const tableStart = (w - tableWidth) / 2
      const tableEnd = tableStart + tableWidth
      const shoulderHeight = h * 0.3
      const cx = w / 2

      return `
        ${tableStart},0
        ${tableEnd},0
        ${w},${shoulderHeight}
        ${cx},${h}
        0,${shoulderHeight}
      `.trim()
    }
  }
}
</script>