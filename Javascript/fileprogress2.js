const getid = document.getElementById("navselect");
const newelem = document.createElement("script"); //creating a new element
getid.addEventListener("click", addjava);
newelem.src = "./Javascript/fileprogress.js"; //adding the file path
function addjava() {
  document.body.appendChild(newelem); //appending it to the body
}
//get to know anout this

window.addEventListener("scroll", () => {
  const skillSection = document.getElementById("skilldivid");
  const sectionTop = skillSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.5; // 50% of the viewport height

  if (sectionTop < triggerPoint) {
    addjava(); // Add the script when the skills section is scrolled into view
  }
});
