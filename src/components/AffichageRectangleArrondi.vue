<template>
  <svg :width="largeur" :height="hauteur" style="background-color: #242424">
    <rect
        x="0"
        y="0"
        :width="largeur"
        :height="hauteur"
        :rx="rx"
        :ry="ry"
        fill="#c0eaff"
        stroke="#333"
        stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'AffichageRectangleArrondi',
  props: {
    largeur: { type: Number, required: true },
    hauteur: { type: Number, required: true },
    rayonSupGauche: { type: Number, required: true },
    rayonSupDroit: { type: Number, required: true },
    rayonInfGauche: { type: Number, required: true },
    rayonInfDroit: { type: Number, required: true }
  },
  computed: {
    rx() {
      // pour simplifier le SVG natif, on prend le plus petit rayon horizontal des 4 coins
      return Math.min(
          this.rayonSupGauche,
          this.rayonSupDroit,
          this.rayonInfGauche,
          this.rayonInfDroit
      )
    },
    ry() {
      // idem pour vertical
      return this.rx
    }
  }
}
</script>
