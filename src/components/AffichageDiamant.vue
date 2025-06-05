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
      const cx = w / 2
      const cy = h / 2
      return `
        ${cx},0
        ${w},${cy}
        ${cx},${h}
        0,${cy}
      `
    }
  }
}
</script>
