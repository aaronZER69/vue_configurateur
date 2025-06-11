<template>
  <svg :width="base" :height="hauteur" style="border:1px solid #ccc">
    <polygon
        :points="`0,${hauteur} ${base},${hauteur} 0,0`"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageTriangleRectangle',
  props: {
    base: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  }
}
</script>
