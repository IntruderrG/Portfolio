const getelement = document.querySelectorAll(".innerprogbar");
getelement.forEach((inp) => {
  inp.style.width = `${inp.innerText}%`;
  inp.textContent = "";
});
