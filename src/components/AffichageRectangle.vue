<template>
  <svg :width="largeur + 100" :height="hauteur + 100">
    <!-- Forme principale -->
    <path
        :d="pathData"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />

    <!-- Découpe intérieure (si activée) -->
    <g
        v-if="decoupeInterieure"
        :transform="`translate(${innerPosition.x}, ${innerPosition.y}) rotate(${innerRotation})`"
    >
      <path
          :d="getInnerShapePath(innerShape, innerDimensions)"
          fill="white"
          stroke="red"
          stroke-dasharray="4"
      />
    </g>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  largeur: Number,
  hauteur: Number,
  anglesArrondis: Boolean,
  rayonAngle: Number,
  decoupeInterieure: Boolean,
  innerShape: String,
  innerDimensions: Object,
  innerPosition: Object,
  innerRotation: Number
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

const getInnerShapePath = (shape, dimensions) => {
  switch (shape) {
    case 'rectangle':
      return `M ${-dimensions.longueur / 2} ${-dimensions.largeur / 2}
              h ${dimensions.longueur}
              v ${dimensions.largeur}
              h ${-dimensions.longueur} Z`

    case 'rond':
      return `M 0, 0
              m -${dimensions.rayon}, 0
              a ${dimensions.rayon},${dimensions.rayon} 0 1,0 ${dimensions.rayon * 2},0
              a ${dimensions.rayon},${dimensions.rayon} 0 1,0 -${dimensions.rayon * 2},0`

      // Ajoute d'autres formes ici si nécessaire

    default:
      return ''
  }
}
</script>
