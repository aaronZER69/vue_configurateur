<template>
  <svg :width="longueur" :height="hauteur" style= "background-color: #242424">
    <path
        :d="path"
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
    longueur: { type: Number, required: true }, // Longueur totale
    hauteur: { type: Number, required: true }   // Hauteur (soit le diamètre des demi-cercles)
  },
  computed: {
    path() {
      const r = this.hauteur / 2;
      const l = this.longueur;

      // Si la longueur est inférieure à la hauteur, on ne peut pas faire de capsule
      if (l < this.hauteur) return '';

      const rectLength = l - 2 * r;

      return `
        M ${r},0
        H ${r + rectLength}
        A ${r},${r} 0 0 1 ${r + rectLength},${this.hauteur}
        H ${r}
        A ${r},${r} 0 0 1 ${r},0
        Z
      `;
    }
  }
}
</script>
