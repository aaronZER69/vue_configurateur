<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
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
  name: 'AffichageHexagone',
  props: {
    cote: { type: Number, required: true },
    anglesArrondis: { type: Boolean, default: false },
    rayonAngle: { type: Number, default: 10 }
  },
  computed: {
    largeur() {
      return this.cote * 2
    },
    hauteur() {
      return Math.sqrt(3) * this.cote
    },
    pointList() {
      const c = this.cote
      const h = Math.sqrt(3) * c
      const w = 2 * c

      return [
        { x: c, y: 0 },
        { x: w, y: h / 4 },
        { x: w, y: (3 * h) / 4 },
        { x: c, y: h },
        { x: 0, y: (3 * h) / 4 },
        { x: 0, y: h / 4 }
      ]
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
