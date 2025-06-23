<template>
  <svg :width="diametre" :height="diametre" style="border:1px solid #ccc">
    <circle
        :cx="diametre / 2"
        :cy="diametre / 2"
        :r="diametre / 2"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageRond',
  props: {
    diametre: { type: Number, required: true },
  }
}
</script>
