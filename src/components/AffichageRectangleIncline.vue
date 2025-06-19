<template>
  <svg :width="base" :height="hauteurMax" style="border:1px solid #ccc">
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
  hauteurGauche: { type: Number, required: true },
  hauteurDroite: { type: Number, required: true },
  anglesArrondis: { type: Boolean, default: false },
  rayonAngle: { type: Number, default: 10 },
})

const hauteurMax = computed(() => Math.max(props.hauteurGauche, props.hauteurDroite))

const pointsArray = computed(() => {
  const b = props.base
  const hG = props.hauteurGauche
  const hD = props.hauteurDroite
  return [
    { x: 0, y: hG },         // bas gauche
    { x: b, y: hD },         // bas droite
    { x: b, y: 0 },          // haut droite
    { x: 0, y: 0 },          // haut gauche
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
