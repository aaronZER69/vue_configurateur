<template>
  <svg :width="largeur + 100" :height="hauteur + 100">
    <!-- Forme principale -->
    <path
        :d="pathData"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
    <g v-if="trousAffiches.length > 0">
      <circle
          v-for="(trou, index) in trousAffiches"
          :key="index"
          :cx="trou.x + x"
          :cy="trou.y + y"
          :r="trou.r"
          fill="white"
      />
    </g>




  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { getTrous } from "../utils/trous.js";

const props = defineProps({
  largeur: Number,
  hauteur: Number,
  anglesArrondis: Boolean,
  rayonAngle: Number,
  trousActive: Boolean,
  trousOption: String,
  trousCoin: Object,
  trousPerso: Array

})
const trousAffiches = computed(() =>
    props.trousActive
        ? getTrous({
          option: props.trousOption,
          coin: props.trousCoin,
          perso: props.trousPerso,
          largeur: props.largeur,
          hauteur: props.hauteur
        })
        : []
)


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
