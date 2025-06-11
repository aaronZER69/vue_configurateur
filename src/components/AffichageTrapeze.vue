<template>
  <svg :width="largeurMax" :height="hauteur" style="border:1px solid #ccc">
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
  name: 'AffichageTrapeze',
  props: {
    base: { type: Number, required: true },
    haut: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  },
  computed: {
    largeurMax() {
      return Math.max(this.base, this.haut)
    },
    points() {
      const b = this.base
      const h = this.haut
      const y = this.hauteur
      const decalage = (b - h) / 2

      return `
        ${decalage},0
        ${decalage + h},0
        ${b},${y}
        0,${y}
      `
    }
  }
}
</script>
