<template>
  <svg :width="2 * rayon" :height="2 * rayon" style="border:1px solid #ccc">
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
  name: 'AffichagePolygone',
  props: {
    nbCotes: { type: Number, required: true },
    rayon: { type: Number, required: true }
  },
  computed: {
    points() {
      const cx = this.rayon
      const cy = this.rayon
      const coords = []
      const angleStep = (2 * Math.PI) / this.nbCotes

      for (let i = 0; i < this.nbCotes; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = cx + this.rayon * Math.cos(angle)
        const y = cy + this.rayon * Math.sin(angle)
        coords.push(`${x},${y}`)
      }

      return coords.join(' ')
    }
  }
}
</script>
