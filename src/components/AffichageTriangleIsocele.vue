<template>
  <svg :width="base" :height="hauteur" style="border:1px solid #ccc">
    <polygon
        :points="`0,${hauteur} ${base / 2},0 ${base},${hauteur}`"
        fill="#ffd580"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageTriangleIsocele',
  props: {
    base: Number,
    hauteur: Number
  }
}
</script>
