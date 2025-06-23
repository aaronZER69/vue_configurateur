<template>
  <svg :width="base" :height="hauteur" style="border:1px solid #ccc">
    <path
        :d="pathData"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { getRoundedPolygonOutside } from '../utils/anglesArrondis.js'

const props = defineProps({
  base: { type: Number, required: true },
  hauteur: { type: Number, required: true },
  anglesArrondis: { type: Boolean, default: false },
  rayonAngle: { type: Number, default: 10 },
})

const pointsArray = computed(() => {
  const b = props.base
  const h = props.hauteur
  return [
    { x: 0, y: h },   // coin bas gauche (angle droit)
    { x: b, y: h },   // coin bas droit
    { x: 0, y: 0 },   // coin haut gauche
  ]
})

const pathData = computed(() => {
  if (props.anglesArrondis) {
    return getRoundedPolygonOutside(pointsArray.value, props.rayonAngle)
  }

  return (
      pointsArray.value.map((p, i) =>
          i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`
      ).join(' ') + ' Z'
  )
})
</script>
