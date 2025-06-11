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
      const w = this.largeur;
      const h = this.hauteur;
      const cx = w / 2;
      const cy = h / 2;

      return `
       M ${cx},${cy + h / 2}
C ${cx + w / 2},${cy + h / 2} ${cx + w / 2},${cy} ${cx},${cy - h / 2}
C ${cx - w / 2},${cy} ${cx - w / 2},${cy + h / 2} ${cx},${cy + h / 2}
Z
`
    }
  }
}
</script>
