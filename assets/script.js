const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//
// Valeur let à incrémenter ou décrémenter
let index = 0;
// Valeur let qui sauvegardera ma dernière valeur d'index
let lastIndex = 0;

// Récupération de tous mes élèments du DOM qui seront utiliser
const btnRight = document.querySelector(".arrow_right");
const btnLeft = document.querySelector(".arrow_left");
const imgSlide = document.querySelector(".banner-img");
const dotSlide = document.querySelectorAll(".dot");
const tagSlide = document.querySelector("#banner p");

// Ajout du listener sur mes fleches de droite et de gauche
btnRight.addEventListener("click", rightClick);
btnLeft.addEventListener("click", leftClick);

// Fonction clique droit
// A chaque clique j'incrémente mon index de 1 et je sauvegarde l'ancien index en calculant le nouveau index - 1;
// Quand mon index arrive à la longueur de mon tableau donc (4) on revient à l'index 0.
// J'execute ma fonction
function rightClick() {
  index++;
  lastIndex = index - 1;
  if (index == slides.length) {
    index = 0;
  }
  switchExec();
}

// Fonction clique gauche
// A chaque clique je désincrémente mon index de 1 et je sauvegarde l'ancien index en calculant le nouveau index +1;
// Quand mon index devient inférieur à 0 je reviens à longueur de mon tableau -1 pour obtenir l'index 3.
// J'execute ma fonction
function leftClick() {
  index = index - 1;
  lastIndex = index + 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  switchExec();
}

// Fonction execution au switch
// Création d'une constante qui permet d'obtenir l'index du tableau.
// Ajout de la class dot_selected à l'index ou nous nous trouvons.
// Remove de la class dot_selected à l'ancien index ou nous étions.
// Ajout de l'image suivant à quelle index nous sommes dans le tableau
// De même mais pour la tagline
function switchExec() {
  const slideIndex = slides[index];
  dotSlide[index].classList.add("dot_selected");
  dotSlide[lastIndex].classList.remove("dot_selected");
  imgSlide.src = slideIndex.image;
  tagSlide.innerHTML = slideIndex.tagLine;
}
