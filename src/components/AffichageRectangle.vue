<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <rect x="0" y="0" :width="largeur" :height="hauteur" fill="#c0eaff" stroke="#333" stroke-width="2"/>
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { getRoundedPolygonOutside } from '../utils/anglesArrondis.js'

const props = defineProps({
  largeur: Number,
  hauteur: Number,
  anglesArrondis: Boolean,
  rayonAngle: Number,
})

// Génération des coins du rectangle à partir du centre (ou coin haut-gauche)
const points = computed(() => {
  const x = 50
  const y = 50
  const l = props.largeur || 200
  const h = props.hauteur || 100

  return [
    { x: x,     y: y },
    { x: x + l, y: y },
    { x: x + l, y: y + h },
    { x: x,     y: y + h },
  ]
})

const pathData = computed(() => {
  return props.anglesArrondis
      ? getRoundedPolygonOutside(points.value, props.rayonAngle)
      : points.value.map((p, i) =>
      i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`
  ).join(' ') + ' Z'
})
</script>