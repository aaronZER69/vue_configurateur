<template>
  <svg :width="largeurMax" :height="hauteur" style="background-color: #242424">
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
  haut: { type: Number, required: true },
  hauteur: { type: Number, required: true },
  anglesArrondis: { type: Boolean, default: false },
  rayonAngle: { type: Number, default: 10 }
})

const largeurMax = computed(() => Math.max(props.base, props.haut))

const pointsArray = computed(() => {
  const b = props.base
  const h = props.haut
  const y = props.hauteur
  const d = (b - h) / 2

  return [
    { x: d,      y: 0 },       // haut gauche
    { x: d + h,  y: 0 },       // haut droite
    { x: b,      y: y },       // bas droite
    { x: 0,      y: y }        // bas gauche
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
