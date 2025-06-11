<template>
  <svg :width="2 * rayonExterieur" :height="2 * rayonExterieur" style="border:1px solid #ccc">
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
  name: 'AffichageEtoile',
  props: {
    nbBranches: { type: Number, required: true },
    rayonExterieur: { type: Number, required: true },
    rayonInterieur: { type: Number, required: true }
  },
  computed: {
    points() {
      const cx = this.rayonExterieur
      const cy = this.rayonExterieur
      const totalPoints = this.nbBranches * 2
      const angleStep = (2 * Math.PI) / totalPoints
      const coords = []

      for (let i = 0; i < totalPoints; i++) {
        const angle = i * angleStep - Math.PI / 2
        const r = i % 2 === 0 ? this.rayonExterieur : this.rayonInterieur
        const x = cx + r * Math.cos(angle)
        const y = cy + r * Math.sin(angle)
        coords.push(`${x},${y}`)
      }

      return coords.join(' ')
    }
  }
}
</script>
