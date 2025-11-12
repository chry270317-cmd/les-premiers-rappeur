const carte = document.getElementById("carteflip");
const carte2 = document.getElementById("carteflip2");
const carte3 = document.getElementById("carteretour");

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
