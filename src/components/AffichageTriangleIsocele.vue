<template>
  <svg :width="base" :height="hauteur" style="background-color: #242424">
    <path
        :d="trianglePath"
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
  anglesArrondis: Boolean,
  rayonAngle: Number,
  base: {
    type: Number,
    default: 200
  },
  hauteur: {
    type: Number,
    default: 200
  },
})

// Calcul des points du triangle isocèle basé sur largeur et hauteur
const points = computed(() => [
  { x: props.base / 2, y: 0 },            // sommet en haut au centre
  { x: 0, y: props.hauteur },                // coin bas gauche
  { x: props.base, y: props.hauteur },   // coin bas droit
])

const trianglePath = computed(() => {
  return props.anglesArrondis
      ? getRoundedPolygonOutside(points.value, props.rayonAngle)
      : `M ${points.value[0].x} ${points.value[0].y} L ${points.value[1].x} ${points.value[1].y} L ${points.value[2].x} ${points.value[2].y} Z`
})
</script>
