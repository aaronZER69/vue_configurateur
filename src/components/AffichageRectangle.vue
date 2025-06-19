<template>
  <svg :width="largeur + 100" :height="hauteur + 100" style="border:1px solid #ccc">
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

const props = defineProps({
  largeur: Number,
  hauteur: Number,
  anglesArrondis: Boolean,
  rayonAngle: Number,
})

const x = 50
const y = 50

const pathData = computed(() => {
  const r = props.anglesArrondis ? Math.min(props.rayonAngle, props.largeur / 2, props.hauteur / 2) : 0
  const l = props.largeur
  const h = props.hauteur

  return `
    M ${x + r} ${y}
    H ${x + l - r}
    A ${r} ${r} 0 0 1 ${x + l} ${y + r}
    V ${y + h - r}
    A ${r} ${r} 0 0 1 ${x + l - r} ${y + h}
    H ${x + r}
    A ${r} ${r} 0 0 1 ${x} ${y + h - r}
    V ${y + r}
    A ${r} ${r} 0 0 1 ${x + r} ${y}
    Z
  `
})
</script>
