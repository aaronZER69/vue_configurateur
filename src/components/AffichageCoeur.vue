<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <path
        :d="coeurPath"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageCoeur',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  },
  computed: {
    coeurPath() {
      const w = this.largeur
      const h = this.hauteur
      const cx = w / 2

      return `
        M ${cx},${h * 0.3}
        C ${cx},${h * 0.1} ${cx - w * 0.2},0 ${cx - w * 0.35},0
        C ${cx - w * 0.5},0 ${cx - w * 0.5},${h * 0.2} ${cx - w * 0.5},${h * 0.3}
        C ${cx - w * 0.5},${h * 0.4} ${cx},${h * 0.6} ${cx},${h}
        C ${cx},${h * 0.6} ${cx + w * 0.5},${h * 0.4} ${cx + w * 0.5},${h * 0.3}
        C ${cx + w * 0.5},${h * 0.2} ${cx + w * 0.5},0 ${cx + w * 0.35},0
        C ${cx + w * 0.2},0 ${cx},${h * 0.1} ${cx},${h * 0.3}
        Z
      `.trim()
    }
  }
}
</script>