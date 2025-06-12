<template>
  <svg :width="diametre" :height="rayon" style="border:1px solid #ccc; background-color: #242424">
    <path
        :d="path"
        fill="#c0eaff"
        stroke="#c0eaff"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageDemiCercle',
  props: {
    diametre: { type: Number, required: true }
  },
  computed: {
    rayon() {
      return this.diametre / 2
    },
    path() {
      const r = this.rayon
      return `
        M 0,${r}
        A ${r},${r} 0 0,1 ${this.diametre},${r}
        L ${this.diametre},0
        L 0,0
        Z
      `
    }
  }
}
</script>
