<template>
  <svg :width="largeur" :height="hauteurMax" style="border:1px solid #ccc">
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
  name: 'AffichageCerfVolant',
  props: {
    largeur: { type: Number, required: true },
    hauteurMax: { type: Number, required: true },
    hauteurMin: { type: Number, required: true }
  },
  computed: {
    points() {
      const w = this.largeur
      const hMax = this.hauteurMax
      const hMin = this.hauteurMin
      const cx = w / 2

      return `
        ${cx},0
        0,${hMin}
        ${cx},${hMax}
        ${w},${hMin}
      `
    }
  }
}
</script>
