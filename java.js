const carte = document.getElementById("carteflip");
const carte2 = document.getElementById("carteflip2");
const carte3 = document.getElementById("carteretour");
const carte4 = document.getElementById("retourne");
const carte5 = document.getElementById("retour");
const carte6 = document.getElementById("tourne");
if (carte) {
  carte.addEventListener("click", () => {
    carte.classList.toggle("flipped");
  });
}
if (carte2) {
  carte2.addEventListener("click", () => {
    carte2.classList.toggle("flipped");
  });
}
if (carte3) {
  carte3.addEventListener("click", () => {
    carte3.classList.toggle("flipped");
  });
}
if (carte4) {
  carte4.addEventListener("click", () => {
    carte4.classList.toggle("flipped");
  });
}
if (carte5) {
  carte5.addEventListener("click", () => {
    carte5.classList.toggle("flipped");
  });
}
if (carte6) {
  carte6.addEventListener("click", () => {
    carte6.classList.toggle("flipped");
  });
}
