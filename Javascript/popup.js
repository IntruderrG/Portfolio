const getPopup = document.getElementsByClassName("popup")[0];
const getButton = document.getElementById("pbtn");
const getCrossButton = document.getElementsByClassName("closebtn")[0];
const getmainBody = document.getElementsByClassName("mainbody")[0];
const getNavbar = document.getElementsByTagName("nav")[0];
const getFooter = document.getElementsByTagName("footer")[0];
const getSectionTwo = document.getElementsByTagName("section")[1];
const getSectionThree = document.getElementsByTagName("section")[2];
const getparaContainer = document.getElementsByClassName("paracontainer")[0];
// console.log(getparaContainer);
getButton.addEventListener("click", addPopup);
getCrossButton.addEventListener("click", removePopup);
getNavbar.addEventListener("click", removePopup);
getFooter.addEventListener("click", removePopup);
// getparaContainer.addEventListener("click", removePopup);
getSectionTwo.addEventListener("click", removePopup);
getSectionThree.addEventListener("click", removePopup);
function addPopup() {
  getPopup.style.display = "flex";
  setTimeout(() => {
    getPopup.style.opacity = 1;
    getNavbar.style.opacity = 0.5;
    getFooter.style.opacity = 0.5;
    getSectionTwo.style.opacity = 0.5;
    getSectionThree.style.opacity = 0.5;
    getparaContainer.style.opacity = 0.5;
  }, 20);
}
function removePopup() {
  getNavbar.style.opacity = 1;
  getFooter.style.opacity = 1;
  getSectionTwo.style.opacity = 1;
  getSectionThree.style.opacity = 1;
  getparaContainer.style.opacity = 1;

  getPopup.style.opacity = 0;
  setTimeout(() => {
    getPopup.style.display = "none";
  }, 1500);
}
