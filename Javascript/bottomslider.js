let counter = 1;
// console.log("Hello");
setInterval(() => {
  document.getElementById("aboutradio" + counter).checked = true;
  counter++;
  if (counter >= 4) {
    counter = 1;
  }
}, 2000);
