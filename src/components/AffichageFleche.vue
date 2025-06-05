<template>
  <svg :width="Math.max(longueurBase, largeurTete)" :height="hauteurTotale" style="border:1px solid #ccc">
    <!-- Corps de la flèche (rectangle) -->
    <rect
        :x="(maxLargeur - longueurBase) / 2"
        :y="hauteurTete"
        :width="longueurBase"
        :height="hauteurBase"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />

    <!-- Tête de la flèche (triangle) -->
    <polygon
        :points="tetePoints"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageFleche',
  props: {
    longueurBase: { type: Number, required: true },
    hauteurBase: { type: Number, required: true },
    largeurTete: { type: Number, required: true },
    hauteurTete: { type: Number, required: true }
  },
  computed: {
    hauteurTotale() {
      return this.hauteurBase + this.hauteurTete
    },
    maxLargeur() {
      return Math.max(this.longueurBase, this.largeurTete)
    },
    tetePoints() {
      const cx = this.maxLargeur / 2
      return `
        ${cx},0
        ${cx - this.largeurTete / 2},${this.hauteurTete}
        ${cx + this.largeurTete / 2},${this.hauteurTete}
      `
    }
  }
}
</script>
