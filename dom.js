function increasecount() {
  let countelement = document.getElementById("count");
  let currentcount = parseInt(countelement.textContent);
  countelement.textContent = currentcount + 1;
}
