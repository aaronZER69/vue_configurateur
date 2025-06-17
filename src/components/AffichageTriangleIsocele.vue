<template>
  <svg width="300" height="300" viewBox="0 0 300 300">
    <path
        :d="trianglePath"
        fill="#c0eaff"
        stroke="#333"

    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { getRoundedPolygonOutside } from '../utils/anglesArrondis.js'

const props = defineProps({
  anglesArrondis: Boolean,
  rayonAngle: Number,
})

const points = [
  { x: 150, y: 50 },
  { x: 50, y: 250 },
  { x: 250, y: 250 },
]

const trianglePath = computed(() => {
  return props.anglesArrondis
      ? getRoundedPolygonOutside(points, props.rayonAngle)
      : `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} Z`
})
</script>

