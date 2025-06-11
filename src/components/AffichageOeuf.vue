<template>
  <svg :width="largeur" :height="hauteur" style="border:1px solid #ccc">
    <path
        :d="oeufPath"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageOeuf',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true }
  },
  computed: {
    oeufPath() {
      const w = this.largeur;
      const h = this.hauteur;
      const cx = w / 2;

      return `
        M ${cx},0
        C ${cx + w * 0.4},0 ${cx + w * 0.5},${h * 0.3} ${cx + w * 0.5},${h * 0.6}
        C ${cx + w * 0.5},${h * 0.85} ${cx + w * 0.3},${h} ${cx},${h}
        C ${cx - w * 0.3},${h} ${cx - w * 0.5},${h * 0.85} ${cx - w * 0.5},${h * 0.6}
        C ${cx - w * 0.5},${h * 0.3} ${cx - w * 0.4},0 ${cx},0
        Z
      `.trim();
    }
  }
};
</script>