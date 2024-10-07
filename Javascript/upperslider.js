let count = 1;
setInterval(() => {
  document.getElementById("radio" + count).checked = true;
  count++;
  // console.log("Hi");
  if (count > 4) {
    count = 1;
  }
}, 2000);
