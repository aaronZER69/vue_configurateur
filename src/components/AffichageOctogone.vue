<template>
  <svg :width="taille" :height="taille" style="background-color: #242424">
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
  name: 'AffichageOctogone',
  props: {
    cote: { type: Number, required: true },
    anglesArrondis: { type: Boolean, default: false },
    rayonAngle: { type: Number, default: 10 }
  },
  computed: {
    rayon() {
      return this.cote / (2 * Math.sin(Math.PI / 8))
    },
    taille() {
      return 2 * this.rayon
    },
    pointList() {
      const cx = this.rayon
      const cy = this.rayon
      const points = []
      for (let i = 0; i < 8; i++) {
        const angle = (2 * Math.PI * i) / 8 - Math.PI / 8
        const x = cx + this.rayon * Math.cos(angle)
        const y = cy + this.rayon * Math.sin(angle)
        points.push({ x, y })
      }
      return points
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
