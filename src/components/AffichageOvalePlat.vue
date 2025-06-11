<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <ellipse
        :cx="largeur / 2"
        :cy="hauteur / 2"
        :rx="largeur / 2"
        :ry="hauteur / 2"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageOvalePlat',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  }
}
</script>
