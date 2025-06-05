<template>
  <svg :width="base" :height="hauteur" style="border:1px solid #ccc">
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
  name: 'AffichageParallelogramme',
  props: {
    base: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  },
  computed: {
    points() {
      const b = this.base
      const h = this.hauteur
      const decalage = b * 0.25 // décalage horizontal du haut

      return `
        ${decalage},0
        ${b},0
        ${b - decalage},${h}
        0,${h}
      `
    }
  }
}
</script>
