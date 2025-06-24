<template>
  <svg :width="largeurBase" :height="hauteurBase + rayon" style="background-color: #242424">
    <!-- Forme complète : demi-cercle + rectangle en un seul path -->
    <path
        :d="formeComplete"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageArche',
  props: {
    largeurBase: { type: Number, required: true },
    hauteurBase: { type: Number, required: true },
    rayon: { type: Number, required: true }
  },
  computed: {
    formeComplete() {
      const r = this.rayon;
      const w = this.largeurBase;
      const h = this.hauteurBase;

      return `
        M 0,${r}
        A ${r},${r} 0 0,1 ${w},${r}
        L ${w},${r + h}
        L 0,${r + h}
        Z
      `;
    }
  }
}
</script>
