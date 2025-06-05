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
      const cx = w / 2

      return `
        M ${cx},0
        C ${w},${h * 0.35} ${w},${h * 0.75} ${cx},${h}
        C 0,${h * 0.75} 0,${h * 0.35} ${cx},0
        Z
      `
    }
  }
}
</script>
