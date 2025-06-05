<template>
  <svg :width="largeurBase" :height="hauteurBase + rayon" style="border:1px solid #ccc">
    <!-- Rectangle bas -->
    <rect
        x="0"
        :y="rayon"
        :width="largeurBase"
        :height="hauteurBase"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />

    <!-- Demi-cercle haut -->
    <path
        :d="arcPath"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageArche',
  props: {
    largeurBase: { type: Number, required: true },
    hauteurBase: { type: Number, required: true },
    rayon: { type: Number, required: true }
  },
  computed: {
    arcPath() {
      const cx = this.largeurBase / 2
      const r = this.rayon
      return `
        M 0,${r}
        A ${r},${r} 0 0,1 ${this.largeurBase},${r}
        L ${this.largeurBase},0
        L 0,0
        Z
      `
    }
  }
}
</script>
