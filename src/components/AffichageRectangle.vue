<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <rect x="0" y="0" :width="largeur" :height="hauteur" fill="#c0eaff" stroke="#333" stroke-width="2"/>
  </svg>
</template>

<script>
export default {
  name: 'AffichageRectangle',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  }
}
</script>
