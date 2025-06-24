<template>
  <svg :width="2 * rayon" :height="2 * rayon" style="background-color: #242424">
    <path
        :d="pathData"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
import { getRoundedPolygonOutside } from '../utils/anglesArrondis.js'

export default {
  name: 'AffichagePolygone',
  props: {
    nbCotes: { type: Number, required: true },
    cote: { type: Number, required: true },  // longueur d’un côté
    anglesArrondis: { type: Boolean, default: false },
    rayonAngle: { type: Number, default: 10 }
  },
  computed: {
    rayon() {
      // Rayon du cercle circonscrit
      return this.cote / (2 * Math.sin(Math.PI / this.nbCotes))
    },
    pointList() {
      const cx = this.rayon
      const cy = this.rayon
      const coords = []
      const angleStep = (2 * Math.PI) / this.nbCotes

      for (let i = 0; i < this.nbCotes; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = cx + this.rayon * Math.cos(angle)
        const y = cy + this.rayon * Math.sin(angle)
        coords.push({ x, y })
      }

      return coords
    },
    pathData() {
      if (this.anglesArrondis) {
        return getRoundedPolygonOutside(this.pointList, this.rayonAngle)
      }
      return this.pointList.map((p, i) =>
          i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`
      ).join(' ') + ' Z'
    }
  }
}
</script>
