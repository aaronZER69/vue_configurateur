<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <path
        :d="coeurPath"
        fill="#ffc0cb"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageCoeur',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  },
  computed: {
    coeurPath() {
      const w = this.largeur
      const h = this.hauteur
      const x = w / 2
      const y = h / 4

      return `
        M ${x},${h}
        C ${x - w / 2},${h * 0.6} ${x - w / 2},${y} ${x},${y}
        C ${x + w / 2},${y} ${x + w / 2},${h * 0.6} ${x},${h}
        Z
      `
    }
  }
}
</script>
