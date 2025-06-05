<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <path
        :d="gouttePath"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageGoutte',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  },
  computed: {
    gouttePath() {
      const w = this.largeur
      const h = this.hauteur
      const x = w / 2
      const y = h / 4

      return `
  M ${x},0
  C ${x + w / 2},${h * 0.4} ${x + w / 2},${h - y} ${x},${h - y}
  C ${x - w / 2},${h - y} ${x - w / 2},${h * 0.4} ${x},0
  Z
`

    }
  }
}
</script>
