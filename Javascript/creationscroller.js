const getCardContainer = document.querySelector(".cardContainer");
const getRightButton = document.querySelector(".crdrightelem ");
const getLeftButton = document.querySelector(".crdleftelem");
getRightButton.addEventListener("click", slideRight);
getLeftButton.addEventListener("click", slideLeft);
let Mcounter = 0;
function slideRight() {
  Mcounter += 20;
  getCardContainer.style.marginLeft = `${-Mcounter}%`;
  console.log(Mcounter);
  if (Mcounter == 400) {
    getRightButton.style.display = "none";
  }
  if (Mcounter > 10) {
    getLeftButton.style.display = "flex";
  }
}
function slideLeft() {
  Mcounter -= 20;
  getCardContainer.style.marginLeft = `${-Mcounter}%`;
  console.log(Mcounter);
  if (Mcounter == 0) {
    getLeftButton.style.display = "none";
  }
  if (Mcounter < 400) {
    getRightButton.style.display = "flex";
  }
}
