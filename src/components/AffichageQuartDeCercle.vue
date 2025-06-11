<template>
  <svg :width="rayon" :height="rayon" style="border:1px solid #ccc">
    <path
        :d="path"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageQuartDeCercle',
  props: {
    rayon: { type: Number, required: true }
  },
  computed: {
    path() {
      return `
        M 0,${this.rayon}
        A ${this.rayon},${this.rayon} 0 0,1 ${this.rayon},0
        L ${this.rayon},${this.rayon}
        Z
      `
    }
  }
}
</script>
