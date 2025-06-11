<template>
  <svg :width="diametreExterieur" :height="diametreExterieur" style="border:1px solid #ccc">
    <circle
        :cx="diametreExterieur / 2"
        :cy="diametreExterieur / 2"
        :r="diametreExterieur / 2"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
    <circle
        :cx="diametreExterieur / 2"
        :cy="diametreExterieur / 2"
        :r="diametreInterieur / 2"
        fill="#242424"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageAnneau',
  props: {
    diametreExterieur: { type: Number, required: true },
    diametreInterieur: { type: Number, required: true }
  }
}
</script>
