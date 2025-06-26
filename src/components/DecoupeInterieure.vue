<template>
  <g v-if="path">
    <path
        :d="path"
        :transform="transform"
        fill="white"
        stroke="red"
        stroke-width="1"
    />
  </g>
</template>

<script setup>
import { computed } from 'vue'
import { getInnerShapePath } from '../utils/innerShape.js'

const props = defineProps({
  type: String,         // ex: 'circle', 'rectangle', etc.
  x: Number,            // position x du centre
  y: Number,            // position y du centre
  width: Number,        // largeur (selon type)
  height: Number,       // hauteur (selon type)
  radius: Number,       // rayon (selon type)
  rotation: Number      // en degrés
})

// Calcule la `d` path de la forme intérieure
const path = computed(() =>
    getInnerShapePath(props.type, {
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      radius: props.radius
    })
)

// Calcule la rotation SVG
const transform = computed(() =>
    props.rotation
        ? `rotate(${props.rotation} ${props.x} ${props.y})`
        : null
)
</script>
