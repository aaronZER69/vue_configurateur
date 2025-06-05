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
  name: 'AffichageHexagone',
  props: {
    cote: { type: Number, required: true }
  },
  computed: {
    largeur() {
      return this.cote * 2
    },
    hauteur() {
      return Math.sqrt(3) * this.cote
    },
    points() {
      const c = this.cote
      const h = Math.sqrt(3) * c
      const w = 2 * c

      return `
        ${c},0
        ${w},${h / 4}
        ${w},${(3 * h) / 4}
        ${c},${h}
        0,${(3 * h) / 4}
        0,${h / 4}
      `
    }
  }
}
</script>
