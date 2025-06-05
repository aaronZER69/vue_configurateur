<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <path
        :d="barilPath"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageBaril',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true },
    rayon: { type: Number, required: true }
  },
  computed: {
    barilPath() {
      const w = this.largeur
      const h = this.hauteur
      const r = this.rayon

      return `
        M ${w / 2 - r},0
        C ${w / 2 - r - 10},${h / 3} ${w / 2 - r - 10},${(2 * h) / 3} ${w / 2 - r},${h}
        L ${w / 2 + r},${h}
        C ${w / 2 + r + 10},${(2 * h) / 3} ${w / 2 + r + 10},${h / 3} ${w / 2 + r},0
        Z
      `
    }
  }
}
</script>
