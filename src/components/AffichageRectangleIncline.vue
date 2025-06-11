<template>
  <svg :width="base" :height="hauteurMax" style="border:1px solid #ccc">
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
  name: 'AffichageRectangleIncline',
  props: {
    base: { type: Number, required: true },
    hauteurGauche: { type: Number, required: true },
    hauteurDroite: { type: Number, required: true }
  },
  computed: {
    hauteurMax() {
      return Math.max(this.hauteurGauche, this.hauteurDroite)
    },
    points() {
      const hG = this.hauteurGauche
      const hD = this.hauteurDroite
      const b = this.base
      return `
        0,${hG}
        ${b},${hD}
        ${b},0
        0,0
      `
    }
  }
}
</script>
