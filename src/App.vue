<template>
  <div class="p-4 max-w-3xl mx-auto space-y-4">
    <h2 class="text-2xl font-bold mb-2">Configurateur Plexiglass</h2>



    <!-- 2. Catégorie / Matériau / Épaisseur -->
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div>
        <label>Catégorie</label>
        <select v-model="selectedCategory" @change="resetMaterial">
          <option v-for="(mats, cat) in materials" :key="cat" :value="cat">
            {{ formatCategory(cat) }}
          </option>
        </select>
      </div>
      <div v-if="selectedCategory">
        <label>Matériau</label>
        <select v-model="selectedMaterial" @change="resetThickness">
          <option v-for="(eps, mat) in materials[selectedCategory]" :key="mat" :value="mat">
            {{ materialLabels[mat] || mat }}
          </option>
        </select>
      </div>
      <div v-if="selectedMaterial">
        <label>Épaisseur</label>
        <select v-model="selectedThickness">
          <option v-for="ep in materials[selectedCategory][selectedMaterial]" :key="ep" :value="ep">
            {{ ep }} mm
          </option>
        </select>
      </div>
    </div>

    <!-- 3. Sélection de la forme -->
    <div class="mt-4">
      <label>Forme</label>
      <select v-model="selectedShape">
        <optgroup label="Formes droites">
          <option value="rectangle">Rectangle</option>
          <option value="rectangle_incline">Rectangle avec côté incliné</option>
          <option value="triangle_isocele">Triangle isocèle</option>
          <option value="triangle_rectangle">Triangle rectangle</option>
          <option value="trapeze">Trapèze</option>
          <option value="parallelogramme">Parallélogramme</option>
          <option value="hexagone">Hexagone</option>
          <option value="octogone">Octogone</option>
          <option value="polygone">Polygone</option>
        </optgroup>
        <optgroup label="Formes rondes">
          <option value="rectangle_arrondi">Rectangle arrondi</option>
          <option value="rond">Cercle</option>
          <option value="demi_cercle">Demi-cercle</option>
          <option value="quart_de_cercle">Quart de cercle</option>
          <option value="anneau">Anneau</option>
          <option value="oeuf">Œuf</option>
          <option value="ovale">Ovale</option>
          <option value="ovale_plat">Ovale plat</option>
          <option value="arche">Arche</option>
          <option value="baril">Baril</option>
        </optgroup>
        <optgroup label="Autres formes">
          <option value="coeur">Coeur</option>
          <option value="fleche">Flèche</option>
          <option value="etoile">Etoile</option>
          <option value="goutte">Goutte</option>
          <option value="cerf_volant">Cerf Volant</option>
          <option value="diamant">Diamant</option>
        </optgroup>
      </select>
    </div>
<!-- Ajoute ce bloc dans le template, là où tu veux afficher le dessin -->
<AffichageRectangle
  v-if="selectedShape === 'rectangle'"
  :largeur="boundingBox.width"
  :hauteur="boundingBox.height"
/>

    <AffichageRectangleIncline
        v-if="selectedShape === 'rectangle_incline'"
        :base="dimensions.base"
        :hauteurGauche="dimensions.hauteurGauche"
        :hauteurDroite="dimensions.hauteurDroite"
    />

    <AffichageTriangleIsocele
        v-if="selectedShape === 'triangle_isocele'"
        :base="dimensions.base"
        :hauteur="dimensions.hauteur"
    />

    <AffichageTriangleRectangle
        v-if="selectedShape === 'triangle_rectangle'"
        :base="dimensions.base"
        :hauteur="dimensions.hauteur"
    />

    <AffichageTrapeze
        v-if="selectedShape === 'trapeze'"
        :base="dimensions.base"
        :haut="dimensions.haut"
        :hauteur="dimensions.hauteur"
    />

    <AffichageParallelogramme
        v-if="selectedShape === 'parallelogramme'"
        :base="dimensions.base"
        :hauteur="dimensions.hauteur"
    />

    <AffichageHexagone
        v-if="selectedShape === 'hexagone'"
        :cote="dimensions.cote"
    />

    <AffichageOctogone
        v-if="selectedShape === 'octogone'"
        :cote="dimensions.cote"
    />

    <AffichagePolygone
        v-if="selectedShape === 'polygone'"
        :nbCotes="dimensions.nbCotes"
        :rayon="dimensions.rayon"
    />

    <AffichageRectangleArrondi
        v-if="selectedShape === 'rectangle_arrondi'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
        :rayonSupGauche="dimensions.rayonSupGauche"
        :rayonSupDroit="dimensions.rayonSupDroit"
        :rayonInfGauche="dimensions.rayonInfGauche"
        :rayonInfDroit="dimensions.rayonInfDroit"
    />

    <AffichageRond
        v-if="selectedShape === 'rond'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
    />
    <AffichageDemiCercle
        v-if="selectedShape === 'demi_cercle'"
        :diametre="dimensions.diametre"
    />

    <AffichageQuartDeCercle
        v-if="selectedShape === 'quart_de_cercle'"
        :rayon="dimensions.rayon"
    />

    <AffichageAnneau
        v-if="selectedShape === 'anneau'"
        :diametreExterieur="dimensions.diametre"
        :diametreInterieur="dimensions.diametreInterieur"
    />
    <AffichageOeuf
        v-if="selectedShape === 'oeuf'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
    />

    <AffichageOvale
        v-if="selectedShape === 'ovale'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
    />


    <AffichageOvalePlat
        v-if="selectedShape === 'ovale_plat'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
    />

    <AffichageArche
        v-if="selectedShape === 'arche'"
        :largeurBase="dimensions.largeurBase"
        :hauteurBase="dimensions.hauteurBase"
        :rayon="dimensions.rayon"
    />


    <AffichageBaril
        v-if="selectedShape === 'baril'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
        :rayon="dimensions.rayon"
    />

    <AffichageCoeur
        v-if="selectedShape === 'coeur'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
    />

    <AffichageFleche
        v-if="selectedShape === 'fleche'"
        :longueurBase="dimensions.longueurBase"
        :hauteurBase="dimensions.hauteurBase"
        :largeurTete="dimensions.largeurTete"
        :hauteurTete="dimensions.hauteurTete"
    />

    <AffichageEtoile
        v-if="selectedShape === 'etoile'"
        :nbBranches="dimensions.nbBranches"
        :rayonExterieur="dimensions.rayonExterieur"
        :rayonInterieur="dimensions.rayonInterieur"
    />

    <AffichageGoutte
        v-if="selectedShape === 'goutte'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
    />

    <AffichageCerfVolant
        v-if="selectedShape === 'cerf_volant'"
        :largeur="dimensions.largeur"
        :hauteurMax="dimensions.hauteurMax"
        :hauteurMin="dimensions.hauteurMin"
    />

    <AffichageDiamant
        v-if="selectedShape === 'diamant'"
        :largeur="dimensions.largeur"
        :hauteur="dimensions.hauteur"
    />





    <!-- 4. Dimensions spécifiques à chaque forme (ultra-exhaustif) -->
    <div class="grid grid-cols-2 gap-4">
      <div v-if="boundingBox.width && boundingBox.height" class="mt-2 text-sm text-gray-600 col-span-2">
        Rectangle facturé : {{ Math.round(boundingBox.width) }} mm x {{ Math.round(boundingBox.height) }} mm
      </div>
      <!-- Rectangle -->
      <template v-if="selectedShape === 'rectangle'">
        <div><label>Longueur (mm)</label><input type="number" v-model.number="dimensions.longueur" min="1" /></div>
        <div><label>Largeur (mm)</label><input type="number" v-model.number="dimensions.largeur" min="1" /></div>
      </template>
      <!-- Rectangle incliné -->
      <template v-if="selectedShape === 'rectangle_incline'">
        <div><label>Longueur (mm)</label><input type="number" v-model.number="dimensions.longueur" min="1" /></div>
        <div><label>Hauteur gauche (mm)</label><input type="number" v-model.number="dimensions.hauteurGauche" min="1" /></div>
        <div><label>Hauteur droite (mm)</label><input type="number" v-model.number="dimensions.hauteurDroite" min="1" /></div>
      </template>
      <!-- Triangle isocèle -->
      <template v-if="selectedShape === 'triangle_isocele'">
        <div><label>Longueur de la base (mm)</label><input type="number" v-model.number="dimensions.base" min="1" /></div>
        <div><label>Hauteur du triangle (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Triangle rectangle -->
      <template v-if="selectedShape === 'triangle_rectangle'">
        <div><label>Longueur de la base (mm)</label><input type="number" v-model.number="dimensions.base" min="1" /></div>
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Trapèze -->
      <template v-if="selectedShape === 'trapeze'">
        <div><label>Longueur de la base (mm)</label><input type="number" v-model.number="dimensions.base" min="1" /></div>
        <div><label>Largeur du haut (mm)</label><input type="number" v-model.number="dimensions.haut" min="1" /></div>
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Parallélogramme -->
      <template v-if="selectedShape === 'parallelogramme'">
        <div><label>Largeur (mm)</label><input type="number" v-model.number="dimensions.largeur" min="1" /></div>
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Hexagone -->
      <template v-if="selectedShape === 'hexagone'">
        <div><label>Longueur d'un côté (mm)</label><input type="number" v-model.number="dimensions.cote" min="1" /></div>
      </template>
      <!-- Octogone -->
      <template v-if="selectedShape === 'octogone'">
        <div><label>Longueur d'un côté (mm)</label><input type="number" v-model.number="dimensions.cote" min="1" /></div>
      </template>
      <!-- Polygone -->
      <template v-if="selectedShape === 'polygone'">
        <div><label>Nombre de côtés</label><input type="number" v-model.number="dimensions.nbCotes" min="3" /></div>
        <div><label>Largeur d'un côté (mm)</label><input type="number" v-model.number="dimensions.cote" min="1" /></div>
      </template>
      <!-- Rectangle arrondi -->
      <template v-if="selectedShape === 'rectangle_arrondi'">
        <div><label>Longueur (mm)</label><input type="number" v-model.number="dimensions.longueur" min="1" /></div>
        <div><label>Largeur (mm)</label><input type="number" v-model.number="dimensions.largeur" min="1" /></div>
        <div><label>Rayon supérieur gauche (mm)</label><input type="number" v-model.number="dimensions.rayonSupGauche" min="0" /></div>
        <div><label>Rayon supérieur droit (mm)</label><input type="number" v-model.number="dimensions.rayonSupDroit" min="0" /></div>
        <div><label>Rayon inférieur gauche (mm)</label><input type="number" v-model.number="dimensions.rayonInfGauche" min="0" /></div>
        <div><label>Rayon inférieur droit (mm)</label><input type="number" v-model.number="dimensions.rayonInfDroit" min="0" /></div>
      </template>
      <!-- Rond -->
      <template v-if="selectedShape === 'rond'">
        <div><label>Diamètre (mm)</label><input type="number" v-model.number="dimensions.diametre" min="1" /></div>
      </template>
      <!-- Demi-cercle -->
      <template v-if="selectedShape === 'demi_cercle'">
        <div><label>Diamètre du cercle (mm)</label><input type="number" v-model.number="dimensions.diametre" min="1" /></div>
      </template>
      <!-- Quart de cercle -->
      <template v-if="selectedShape === 'quart_de_cercle'">
        <div><label>Rayon (mm)</label><input type="number" v-model.number="dimensions.rayon" min="1" /></div>
      </template>
      <!-- Anneau -->
      <template v-if="selectedShape === 'anneau'">
        <div><label>Diamètre extérieur (mm)</label><input type="number" v-model.number="dimensions.diametre" min="1" /></div>
        <div><label>Diamètre intérieur (mm)</label><input type="number" v-model.number="dimensions.diametreInterieur" min="1" /></div>
      </template>
      <!-- Oeuf -->
      <template v-if="selectedShape === 'oeuf'">
        <div><label>Largeur (mm)</label><input type="number" v-model.number="dimensions.largeur" min="1" /></div>
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Ovale -->
      <template v-if="selectedShape === 'ovale'">
        <div><label>Longueur (mm)</label><input type="number" v-model.number="dimensions.longueur" min="1" /></div>
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Ovale plat -->
      <template v-if="selectedShape === 'ovale_plat'">
        <div><label>Longueur (mm)</label><input type="number" v-model.number="dimensions.longueur" min="1" /></div>
        <div><label>Rayon du demi-cercle de chaque côté (mm)</label><input type="number" v-model.number="dimensions.rayonDemiCercle" min="1" /></div>
      </template>
      <!-- Arche -->
      <template v-if="selectedShape === 'arche'">
        <div><label>Largeur de la base (mm)</label><input type="number" v-model.number="dimensions.largeurBase" min="1" /></div>
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Baril -->
      <template v-if="selectedShape === 'baril'">
        <div><label>Longueur (mm)</label><input type="number" v-model.number="dimensions.longueur" min="1" /></div>
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Coeur -->
      <template v-if="selectedShape === 'coeur'">
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Flèche -->
      <template v-if="selectedShape === 'fleche'">
        <div><label>Longueur de la base (mm)</label><input type="number" v-model.number="dimensions.longueurBase" min="1" /></div>
        <div><label>Hauteur de la base (mm)</label><input type="number" v-model.number="dimensions.hauteurBase" min="1" /></div>
        <div><label>Largeur de la tête de flèche (mm)</label><input type="number" v-model.number="dimensions.largeurTete" min="1" /></div>
        <div><label>Hauteur de la tête de flèche (mm)</label><input type="number" v-model.number="dimensions.hauteurTete" min="1" /></div>
      </template>
      <!-- Etoile -->
      <template v-if="selectedShape === 'etoile'">
        <div><label>Rayon intérieur (mm)</label><input type="number" v-model.number="dimensions.rayonInterieur" min="1" /></div>
        <div><label>Rayon extérieur (mm)</label><input type="number" v-model.number="dimensions.rayonExterieur" min="1" /></div>
        <div><label>Nombre de branches</label><input type="number" v-model.number="dimensions.nbBranches" min="3" /></div>
      </template>
      <!-- Goutte -->
      <template v-if="selectedShape === 'goutte'">
        <div><label>Largeur de la base (mm)</label><input type="number" v-model.number="dimensions.largeurBase" min="1" /></div>
        <div><label>Hauteur (mm)</label><input type="number" v-model.number="dimensions.hauteur" min="1" /></div>
      </template>
      <!-- Cerf-volant -->
      <template v-if="selectedShape === 'cerf_volant'">
        <div><label>Largeur totale (mm)</label><input type="number" v-model.number="dimensions.largeurTotale" min="1" /></div>
        <div><label>Hauteur maximale (mm)</label><input type="number" v-model.number="dimensions.hauteurMax" min="1" /></div>
        <div><label>Hauteur minimale (mm)</label><input type="number" v-model.number="dimensions.hauteurMin" min="1" /></div>
        <div><label>Largeur (mm)</label><input type="number" v-model.number="dimensions.largeur" min="1" /></div>
      </template>
      <!-- Diamant -->
      <template v-if="selectedShape === 'diamant'">
        <div><label>Largeur du Haut (mm)</label><input type="number" v-model.number="dimensions.largeurHaut" min="1" /></div>
        <div><label>Hauteur maximale (mm)</label><input type="number" v-model.number="dimensions.hauteurMax" min="1" /></div>
        <div><label>Hauteur minimale (mm)</label><input type="number" v-model.number="dimensions.hauteurMin" min="1" /></div>
      </template>
    </div>

    <!-- 5. Angles arrondis (uniquement formes droites) -->
    <div v-if="isFormeDroite" class="mb-2">
      <label>
        <input type="checkbox" v-model="anglesArrondis" /> Angles arrondis
      </label>
      <div v-if="anglesArrondis" class="flex items-center gap-2 mt-1">
        <label>Rayon de l'angle (mm):</label>
        <button class="px-2 rounded bg-gray-200" @click="changerRayonAngle(-1)">-</button>
        <input type="number" v-model.number="rayonAngle" min="1" style="width: 70px;" />
        <button class="px-2 rounded bg-gray-200" @click="changerRayonAngle(1)">+</button>
      </div>
    </div>

    <!-- 6. Bloc TROUS (exhaustif pour rectangle, voir variantes plus haut pour autres formes) -->
    <div>
      <label><input type="checkbox" v-model="trous" /> Trous</label>
    </div>
    <div v-if="trous" class="mb-4">
      <label>Disposition des trous</label>
      <select v-model="trousOption">
        <option value="coin">Trous sur les 4 coins</option>
        <option value="2angles_largeur">Trous aux 2 angles sur une largeur</option>
        <option value="2angles_longueur">Trous aux 2 angles sur une longueur</option>
        <option value="contour">Trous sur le contour</option>
        <option value="arrondis">Trous multiples en arrondis</option>
        <option value="quadrillage">Quadrillage de trous</option>
        <option value="perso">Trous personnalisés</option>
      </select>
      <div v-if="['coin','2angles_largeur','2angles_longueur'].includes(trousOption)" class="grid grid-cols-2 gap-2 mt-2">
        <div><label>Distance du bord (cm)</label><input type="number" v-model.number="trousCoin.distance" min="0" step="0.1" /></div>
        <div><label>Diamètre du trou (mm)</label><input type="number" v-model.number="trousCoin.diametre" min="1" /></div>
      </div>
      <div v-if="trousOption === 'contour'" class="grid grid-cols-2 gap-2 mt-2">
        <div><label>Distance du bord (cm)</label><input type="number" v-model.number="trousContour.distance" min="0" step="0.1" /></div>
        <div><label>Diamètre du trou (mm)</label><input type="number" v-model.number="trousContour.diametre" min="1" /></div>
        <div><label>Nombre de trous sur Bord 1 (supérieur)</label><input type="number" v-model.number="trousContour.nb1" min="0" /></div>
        <div><label>Nombre de trous sur Bord 2 (droit)</label><input type="number" v-model.number="trousContour.nb2" min="0" /></div>
        <div><label>Nombre de trous sur Bord 3 (inférieur)</label><input type="number" v-model.number="trousContour.nb3" min="0" /></div>
        <div><label>Nombre de trous sur Bord 4 (gauche)</label><input type="number" v-model.number="trousContour.nb4" min="0" /></div>
      </div>
      <div v-if="trousOption === 'arrondis'" class="grid grid-cols-2 gap-2 mt-2">
        <div><label>Nombre de trous</label><input type="number" v-model.number="trousArrondis.nb" min="1" /></div>
        <div><label>Diamètre des trous (mm)</label><input type="number" v-model.number="trousArrondis.diametre" min="1" /></div>
        <div><label>Diamètre du cercle (mm)</label><input type="number" v-model.number="trousArrondis.diametreCercle" min="1" /></div>
        <div><label>Position du cercle (abscisse mm)</label><input type="number" v-model.number="trousArrondis.x" min="0" /></div>
        <div><label>Position du cercle (ordonnée mm)</label><input type="number" v-model.number="trousArrondis.y" min="0" /></div>
      </div>
      <div v-if="trousOption === 'quadrillage'" class="grid grid-cols-2 gap-2 mt-2">
        <div><label>Nombre de lignes de trous horizontales</label><input type="number" v-model.number="trousQuadrillage.lignesH" min="1" /></div>
        <div><label>Nombre de lignes de trous verticales</label><input type="number" v-model.number="trousQuadrillage.lignesV" min="1" /></div>
        <div><label>Nombre de trous par ligne horizontale</label><input type="number" v-model.number="trousQuadrillage.nbParLigneH" min="1" /></div>
        <div><label>Nombre de trous par ligne verticale</label><input type="number" v-model.number="trousQuadrillage.nbParLigneV" min="1" /></div>
        <div><label>Diamètre des trous (mm)</label><input type="number" v-model.number="trousQuadrillage.diametre" min="1" /></div>
        <div><label>Diamètre du cercle (mm)</label><input type="number" v-model.number="trousQuadrillage.diametreCercle" min="1" /></div>
        <div><label>Distance du bord (mm)</label><input type="number" v-model.number="trousQuadrillage.distanceBord" min="0" /></div>
      </div>
      <div v-if="trousOption === 'perso'" class="mt-2">
        <div v-for="(trou, i) in trousPerso" :key="i" class="grid grid-cols-5 gap-2 items-end mb-2">
          <div class="font-bold text-sm flex items-center">Trou n°{{ i + 1 }}</div>
          <div><label>Distance bord gauche (mm)</label><input type="number" v-model.number="trou.x" min="0" /></div>
          <div><label>Distance bord bas (mm)</label><input type="number" v-model.number="trou.y" min="0" /></div>
          <div><label>Diamètre du trou (mm)</label><input type="number" v-model.number="trou.diametre" min="1" /></div>
          <div class="flex items-center">
            <button v-if="trousPerso.length > 1" type="button" class="bg-red-500 text-white px-2 py-1 rounded ml-1" @click="removeTrouPerso(i)">Supprimer</button>
          </div>
        </div>
        <button type="button" class="bg-blue-600 text-white px-2 py-1 rounded" @click="addTrouPerso" :disabled="trousPerso.length >= 30">Ajouter un trou</button>
        <span v-if="trousPerso.length >= 30" class="text-red-600 ml-2">Limite atteinte (30)</span>
      </div>
    </div>

    <!-- 7. Découpe intérieure (exhaustif, tous champs) -->
    <div class="mt-4">
      <label><input type="checkbox" v-model="decoupeInterieure" /> Ajouter une découpe intérieure</label>
    </div>
    <div v-if="decoupeInterieure" class="p-2 border rounded bg-gray-50 mt-2 space-y-4">
      <div>
        <label>Forme de la découpe intérieure</label>
        <select v-model="innerShape">
          <optgroup label="Formes droites">
            <option value="rectangle">Rectangle</option>
            <option value="rectangle_incline">Rectangle avec côté incliné</option>
            <option value="triangle_isocele">Triangle isocèle</option>
            <option value="triangle_rectangle">Triangle rectangle</option>
            <option value="trapeze">Trapèze</option>
            <option value="parallelogramme">Parallélogramme</option>
            <option value="hexagone">Hexagone</option>
            <option value="octogone">Octogone</option>
            <option value="polygone">Polygone</option>
          </optgroup>
          <optgroup label="Formes rondes">
            <option value="rectangle_arrondi">Rectangle arrondi</option>
            <option value="rond">Cercle</option>
            <option value="demi_cercle">Demi-cercle</option>
            <option value="quart_de_cercle">Quart de cercle</option>
            <option value="anneau">Anneau</option>
            <option value="oeuf">Œuf</option>
            <option value="ovale">Ovale</option>
            <option value="ovale_plat">Ovale plat</option>
            <option value="arche">Arche</option>
            <option value="baril">Baril</option>
          </optgroup>
          <optgroup label="Autres formes">
            <option value="coeur">Coeur</option>
            <option value="fleche">Flèche</option>
            <option value="etoile">Etoile</option>
            <option value="goutte">Goutte</option>
            <option value="cerf_volant">Cerf Volant</option>
            <option value="diamant">Diamant</option>
          </optgroup>
        </select>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <!-- Ultra-exhaustif : recopier tous les templates ci-dessus pour innerShape, adapte v-model à innerDimensions.xxxx -->
        <template v-if="innerShape === 'rectangle'">
          <div><label>Longueur (mm)</label><input type="number" v-model.number="innerDimensions.longueur" min="1" /></div>
          <div><label>Largeur (mm)</label><input type="number" v-model.number="innerDimensions.largeur" min="1" /></div>
        </template>
        <template v-if="innerShape === 'rectangle_incline'">
          <div><label>Longueur (mm)</label><input type="number" v-model.number="innerDimensions.longueur" min="1" /></div>
          <div><label>Hauteur gauche (mm)</label><input type="number" v-model.number="innerDimensions.hauteurGauche" min="1" /></div>
          <div><label>Hauteur droite (mm)</label><input type="number" v-model.number="innerDimensions.hauteurDroite" min="1" /></div>
        </template>
        <!-- ...copier pour chaque forme comme ci-dessus, adapter innerDimensions -->
        <!-- (par souci de lisibilité, tu peux copier toutes les templates depuis la partie principale) -->
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <div><label>Position X (mm)</label><input type="number" v-model.number="innerPosition.x" /></div>
        <div><label>Position Y (mm)</label><input type="number" v-model.number="innerPosition.y" /></div>
        <div><label>Rotation (°)</label><input type="number" v-model.number="innerRotation" min="0" max="360" /></div>
      </div>
    </div>

    <!-- 8. Chanfrein -->
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div>
        <label><input type="checkbox" v-model="chanfrein" /> Chanfrein</label>
      </div>
      <div v-if="chanfrein">
        <label>Position du Chanfrein :</label>
        <select v-model="chanfreinPosition">
          <option value="perimetre">Chanfrein sur tout le périmètre</option>
          <option value="largeur">Chanfrein sur un côté en largeur</option>
          <option value="longueur">Chanfrein sur un côté en longueur</option>
          <option value="personnalise">Chanfrein personnalisé (précisez)</option>
        </select>
        <div v-if="chanfreinPosition === 'personnalise'">
          <label>Précisez :</label>
          <input type="text" v-model="chanfreinTexte" style="width:100%" />
        </div>
        <div>
          <label>Profondeur de Chanfrein :</label>
          <select v-model="chanfreinProfondeur">
            <option value="2">Chanfrein de 2 mm</option>
            <option value="3">Chanfrein de 3 mm</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 9. Finition des champs -->
    <div class="mt-2">
      <label>Finition des champs :</label>
      <select v-model="finitionChamps" :disabled="isPolycarbonate">
        <option value="polis">Champs polis transparents</option>
        <option value="brut">Champs bruts de coupe non transparents</option>
      </select>
      <span v-if="isPolycarbonate" class="text-red-600 text-sm ml-2">(Option non disponible pour le polycarbonate)</span>
    </div>

    <!-- 10. Quantité, Note, Prix -->
    <div>
      <label>Quantité</label>
      <input type="number" v-model.number="quantity" min="1" style="width: 80px;" />
    </div>
    <div>
      <label>Note :</label>
      <textarea v-model="note" placeholder="Ajouter une remarque (facultatif)" rows="3" style="width: 100%;"></textarea>
    </div>
    <div>
      <p v-if="calculatedPrice !== null">
        Prix estimé : <strong>{{ calculatedPrice.toFixed(2) }} €</strong>
      </p>
    </div>
  </div>
</template>

<!-- SCRIPT : identique à la version exhaustive précédente -->
<script>
import AffichageRectangle from './components/AffichageRectangle.vue';
import AffichageRectangleIncline from "./components/AffichageRectangleIncline.vue";
import AffichageTriangleIsocele from "./components/AffichageTriangleIsocele.vue";
import AffichageTriangleRectangle from "./components/AffichageTriangleRectangle.vue";
import AffichageTrapeze from "./components/AffichageTrapeze.vue";
import AffichageParallelogramme from "./components/AffichageParallelogramme.vue";
import AffichageHexagone from "./components/AffichageHexagone.vue";
import AffichageOctogone from "./components/AffichageOctogone.vue";
import AffichagePolygone from "./components/AffichagePolygone.vue";
import AffichageRectangleArrondi from "./components/AffichageRectangleArrondi.vue";
import AffichageRond from "./components/AffichageRond.vue";
import AffichageDemiCercle from "./components/AffichageDemiCercle.vue";
import AffichageQuartDeCercle from "./components/AffichageQuartDeCercle.vue";
import AffichageAnneau from "./components/AffichageAnneau.vue";
import AffichageOeuf from "./components/AffichageOeuf.vue";
import AffichageOvale from "./components/AffichageOvale.vue";
import AffichageOvalePlat from "./components/AffichageOvalePlat.vue";
import AffichageArche from "./components/AffichageArche.vue";
import AffichageBaril from "./components/AffichageBaril.vue";
import AffichageCoeur from "./components/AffichageCoeur.vue";
import AffichageFleche from "./components/AffichageFleche.vue";
import AffichageEtoile from "./components/AffichageEtoile.vue";
import AffichageGoutte from "./components/AffichageGoutte.vue";
import AffichageCerfVolant from "./components/AffichageCerfVolant.vue";
import AffichageDiamant from "./components/AffichageDiamant.vue";
export default {
  components: {
    AffichageDiamant,
    AffichageCerfVolant,
    AffichageGoutte,
    AffichageEtoile,
    AffichageFleche,
    AffichageCoeur,
    AffichageBaril,
    AffichageArche,
    AffichageOvalePlat,
    AffichageOvale,
    AffichageOeuf,
    AffichageAnneau,
    AffichageQuartDeCercle,
    AffichageDemiCercle,
    AffichageRond,
    AffichageRectangleArrondi,
    AffichagePolygone,
    AffichageOctogone,
    AffichageHexagone,
    AffichageParallelogramme,
    AffichageTrapeze,
    AffichageTriangleRectangle,
    AffichageTriangleIsocele,
    AffichageRectangleIncline,
    AffichageRectangle
  },
  data() {
    return {
      selectedShape: 'rectangle',
      selectedCategory: null,
      selectedMaterial: null,
      selectedThickness: null,
      dimensions: {
        longueur: 100, largeur: 100, hauteur: 100, hauteurGauche: 100, hauteurDroite: 100,
        base: 100, haut: 100, cote: 100, nbCotes: 6,
        rayonSupGauche: 0, rayonSupDroit: 0, rayonInfGauche: 0, rayonInfDroit: 0,
        diametre: 100, diametreInterieur: 50, rayon: 50, rayonDemiCercle: 20, largeurBase: 100, longueurBase: 100,
        hauteurBase: 100, largeurTete: 100, hauteurTete: 100, rayonInterieur: 20,
        rayonExterieur: 40, nbBranches: 5, hauteurMax: 100, hauteurMin: 50,
        largeurTotale: 100, largeurHaut: 100
      },
      anglesArrondis: false,
      rayonAngle: 5,
      decoupeInterieure: false,
      innerShape: 'rectangle',
      innerDimensions: {
        longueur: 100, largeur: 100, hauteur: 100, hauteurGauche: 100, hauteurDroite: 100,
        base: 100, haut: 100, cote: 100, nbCotes: 6,
        rayonSupGauche: 0, rayonSupDroit: 0, rayonInfGauche: 0, rayonInfDroit: 0,
        diametre: 100, diametreInterieur: 50, rayon: 50, rayonDemiCercle: 20, largeurBase: 100, longueurBase: 100,
        hauteurBase: 100, largeurTete: 100, hauteurTete: 100, rayonInterieur: 20,
        rayonExterieur: 40, nbBranches: 5, hauteurMax: 100, hauteurMin: 50,
        largeurTotale: 100, largeurHaut: 100
      },
      innerPosition: { x: 0, y: 0 },
      innerRotation: 0,
      trous: false,
      trousOption: '',
      trousCoin: { distance: 10, diametre: 5 },
      trousContour: { distance: 10, diametre: 5, nb1: 0, nb2: 0, nb3: 0, nb4: 0 },
      trousArrondis: { nb: 2, diametre: 5, diametreCercle: 30, x: 0, y: 0 },
      trousQuadrillage: {
        lignesH: 2, lignesV: 2, nbParLigneH: 2, nbParLigneV: 2,
        diametre: 5, diametreCercle: 30, distanceBord: 5
      },
      trousPerso: [{ x: 10, y: 10, diametre: 5 }],
      chanfrein: false,
      chanfreinPosition: "perimetre",
      chanfreinTexte: "",
      chanfreinProfondeur: "2",
      finitionChamps: "polis",
      quantity: 1,
      note: '',
      materialLabels: {
        CN: 'Plexiglass Transparent Premium (Coulé)', XT: 'Plexiglass Transparent Économique (Extrudé)',
        GL: 'Plexiglass Aspect Verre Ancien (Glass Look)', BN: 'Plexiglass  Blanc Brillant Opaque',
        ONB: 'Plexiglass Noir Brillant Opaque', PC: 'Polycarbonate Transparent Compact',
        DS: 'Plexiglass Transparent Dépoli Premium (Coulé)', BD: 'Plexiglass Blanc Opale Diffusant',
        PM: 'Plexiglass Miroir', BL: 'Plexiglass Bleu Clair Transparent',
        BF: 'Plexiglass Bleu Foncé Transparent', CV: 'Plexiglass Vert Clair Transparent',
        CVP: 'Plexiglass Vert Foncé Transparent (Vert Pharmacie)', CJTF: 'Plexiglass Jaune Transparent (Tranche Fluo)',
        CJ: 'Plexiglass Jaune Transparent', CR: 'Plexiglass Rouge Transparent',
        CO: 'Plexiglass Orange Transparent', FMC: 'Plexiglass Fumé Marron Clair Transparent',
        FMF: 'Plexiglass Fumé Marron Foncé Transparent', FG: 'Plexiglass Fumé Gris Transparent',
        PONS: 'Plexiglass Noir Mat Opaque', PSODOS: 'Plexiglass Orange Translucide', PRS: 'Plexiglass Rouge Translucide'
      },
      materials: {
        plexiglass_transparent: { CN: [3,4,5,6,8,10,12,15,20,25,30,40], XT: [2,4,10], GL: [3,8] },
        plexiglass_blanc: { BN: [3,5,10,15,20,30], BD: [3,4,8,10] },
        plexiglass_noir: { ONB: [3,5,10,15,20,30], PONS: [3] },
        polycarbonate_transparent: { PC: [3,4,5,8] },
        plexiglass_translucide: { DS: [3,6,8,10,15] },
        plexiglass_miroir: { PM: [5] },
        plexiglass_couleur_transparent: {
          BL: [3], BF: [3], CV: [3], CVP: [3], CJTF: [3], CJ: [3], CR: [3], CO: [3,10]
        },
        plexiglass_couleur_translucide: {
          PSODOS: [10], PRS: [3]
        },
        plexiglass_fume_teinte_transparent: {
          FMC: [3], FMF: [3,6,8,10], FG: [3,4,10]
        }
      },
      pricing: {
        CN: {3:33,4:44,5:52,6:62,8:83,10:108,12:130,15:164,20:240,25:340,30:460,40:613},
        XT: {2:17,4:35,10:88}, GL: {3:59,8:149},
        BN: {3:35,5:54,10:108,15:220,20:215,30:450},
        ONB: {3:35,5:54,10:108,15:220,20:215,30:450},
        PC: {3:39,4:50,5:63,8:108},
        DS: {3:59,6:108,8:125,10:156,15:235},
        BD: {3:40,4:54,8:100,10:130},
        PM: {5:71}, BL: {3:59}, BF: {3:59}, CV: {3:59}, CVP: {3:59}, CJTF: {3:59}, CJ: {3:59}, CR: {3:59}, CO: {3:59,10:120},
        FMC: {3:59}, FMF: {3:40,6:77,8:102,10:143}, FG: {3:40,4:50,10:128},
        PONS: {3:59}, PSODOS: {10:59}, PRS: {3:59}
      }
    };
  },
  computed: {
    // Rectangle englobant toutes les formes
    boundingBox() {
      const d = this.dimensions;
      switch (this.selectedShape) {
        case 'rectangle': return { width: d.longueur, height: d.largeur };
        case 'rectangle_incline': return { width: d.longueur, height: Math.max(d.hauteurGauche, d.hauteurDroite) };
        case 'triangle_isocele':
        case 'triangle_rectangle': return { width: d.base, height: d.hauteur };
        case 'trapeze': return { width: d.base, height: d.hauteur };
        case 'hexagone': return { width: d.cote * Math.sqrt(3), height: d.cote * 2 };
        case 'octogone': return { width: d.cote / Math.sin(Math.PI / 8), height: d.cote / Math.sin(Math.PI / 8) };
        case 'polygone':
          if (d.nbCotes && d.cote) {
            const rayon = d.cote / (2 * Math.sin(Math.PI / d.nbCotes));
            return { width: rayon * 2, height: rayon * 2 };
          } return { width: 0, height: 0 };
        case 'parallelogramme': return { width: d.largeur, height: d.hauteur };
        case 'rectangle_arrondi': return { width: d.longueur, height: d.largeur };
        case 'rond': return { width: d.diametre, height: d.diametre };
        case 'demi_cercle': return { width: d.diametre, height: d.diametre / 2 };
        case 'quart_de_cercle': return { width: d.rayon, height: d.rayon };
        case 'oeuf':
        case 'ovale': return { width: d.longueur, height: d.hauteur };
        case 'ovale_plat': return { width: d.longueur, height: d.rayonDemiCercle * 2 };
        case 'arche': return { width: d.largeurBase, height: d.hauteur };
        case 'baril': return { width: d.longueur, height: d.hauteur };
        case 'anneau': return { width: d.diametre, height: d.diametre };
        case 'coeur': return { width: d.hauteur, height: d.hauteur };
        case 'fleche': return { width: Math.max(d.longueurBase, d.largeurTete), height: (d.hauteurBase || 0) + (d.hauteurTete || 0) };
        case 'etoile': return { width: (d.rayonExterieur || 0) * 2, height: (d.rayonExterieur || 0) * 2 };
        case 'goutte': return { width: d.largeurBase, height: d.hauteur };
        case 'cerf_volant': return { width: d.largeurTotale, height: d.hauteurMax };
        case 'diamant': return { width: d.largeurHaut, height: d.hauteurMax };
        default: return { width: 0, height: 0 };
      }
    },
    calculatedPrice() {
      const w = this.boundingBox.width || 0;
      const h = this.boundingBox.height || 0;
      if (!this.selectedMaterial || !this.selectedThickness || !w || !h) return null;
      const ep = Number(this.selectedThickness);
      const basePrice = this.pricing[this.selectedMaterial]?.[ep] ?? 0;
      const surface = w * h * 0.000001;
      const laserSpeeds = [5, 5, 3.4, 3.4, 2.7, 2.5, 2, 1.7, 1.25, 0.87, 0.9, 0.75, 0.6];
      const speedIndex = [2,3,4,5,6,8,10,12,15,20,25,30,40].indexOf(ep);
      const laserSpeed = laserSpeeds[speedIndex] ?? 1;
      let laser = (w + h) * 0.001 * 2 * (1 / laserSpeed) * 1.35 + 1;
      if (surface < 0.2) {} else if (surface < 0.8) laser *= 1.3;
      else if (surface < 1.5) laser *= 1.5;
      else if (surface < 7) laser *= 1.75;
      if (this.quantity < 5) laser *= 1.5;
      else if (this.quantity < 25) laser *= 1.25;
      const additional = this.quantity === 1 ? 5 : this.quantity === 2 ? 2.5 : this.quantity === 3 ? 1.25 : this.quantity === 4 ? 0.75 : this.quantity === 5 ? 0.25 : this.quantity < 50 ? 0.2 : 0;
     const trouPrice = this.trous ? 0.25 * this.quantity : 0;
const matiere = basePrice * surface;
const prixBaseSansSuppl = matiere + laser;
const chanfreinPrice = this.chanfrein ? prixBaseSansSuppl * 0.25 * this.quantity : 0;
	  
	  // AJOUT SUPPLÉMENT ÉPAISSEUR SPÉCIFIQUE
const moGrossEpassior = (ep) => {
  ep = Number(ep); // Cast ici !
  if (ep === 20) return 5;
  if (ep === 25 || ep === 30) return 10;
  if (ep === 40) return 15;
  return 0;
};
// Supplément pour angles arrondis (exemple : fixe 2€ par plaque)
const anglesArrondisPrice = this.anglesArrondis ? 2 : 0;
const moSup = moGrossEpassior(ep);
const total = (matiere + laser + additional + trouPrice + chanfreinPrice + moSup) * this.quantity;
return total;
},
    isFormeDroite() {
      return [
        'rectangle', 'rectangle_incline', 'triangle_isocele', 'triangle_rectangle',
        'trapeze', 'parallelogramme', 'hexagone', 'octogone', 'polygone'
      ].includes(this.selectedShape);
    },
    isPolycarbonate() {
      return this.selectedMaterial === 'PC';
    }
  },
  methods: {
    resetMaterial() {
      this.selectedMaterial = null;
      this.selectedThickness = null;
    },
    resetThickness() {
      this.selectedThickness = null;
    },
    formatCategory(cat) {
      return cat.replaceAll('_', ' ').replace('plexiglass', 'Plexiglass').replace('polycarbonate', 'Polycarbonate');
    },
    addTrouPerso() {
      if (this.trousPerso.length < 30) {
        this.trousPerso.push({ x: 0, y: 0, diametre: 5 });
      }
    },
    removeTrouPerso(index) {
      if (this.trousPerso.length > 1) {
        this.trousPerso.splice(index, 1);
      }
    },
    changerRayonAngle(val) {
      if (this.rayonAngle + val >= 1) this.rayonAngle += val;
    }
  }
};
</script>
