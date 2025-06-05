<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <path
        :d="oeufPath"
        fill="#ffe4d4"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageOeuf',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  },
  computed: {
    oeufPath() {
      const w = this.largeur
      const h = this.hauteur
      const cx = w / 2

      return `
        M ${cx},0
        C ${w},${h * 0.25} ${w},${h * 0.75} ${cx},${h}
        C 0,${h * 0.75} 0,${h * 0.25} ${cx},0
        Z
      `
    }
  }
}
</script>
