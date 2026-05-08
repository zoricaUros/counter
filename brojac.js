const klikni = document.querySelector(".klikni");
const brojac = document.getElementById("brojac");
const reset = document.getElementById("reset");
const smanji = document.getElementById("smanji");

let brojacKlikova = 0;
klikni.addEventListener("click", function () {
  brojacKlikova++; // brojacKlikova = brojacKlikova + 1
  brojac.innerHTML = brojacKlikova;
});

reset.addEventListener("click", function () {
  brojacKlikova = 0;
  brojac.innerHTML = brojacKlikova;
});

smanji.addEventListener("click", function () {
  brojacKlikova--;
  brojac.innerHTML = brojacKlikova;
});
