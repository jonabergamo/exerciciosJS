var btnSomar = document.querySelector("#btnSomar");
var btnSub = document.querySelector("#btnSub");
var btnMult = document.querySelector("#btnMult");
var btnDiv = document.querySelector("#btnDiv");

btnSomar.addEventListener("click", somar);
btnSub.addEventListener("click", subtrair);
btnMult.addEventListener("click", multiplicar);
btnDiv.addEventListener("click", dividir);


function somar() {
  let n1 = Number(document.querySelector("#n1").value);
  let n2 = Number(document.querySelector("#n2").value);
  resultado = n1 + n2;
  document.querySelector("#result").innerHTML =
    parseFloat(resultado).toFixed(2);
}
function subtrair() {
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);
    resultado = n1 - n2;
    document.querySelector("#result").innerHTML =
      parseFloat(resultado).toFixed(2);
}
function multiplicar() {
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);
    resultado = n1 * n2;
    document.querySelector("#result").innerHTML =
      parseFloat(resultado).toFixed(2);
}
function dividir() {
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);
    resultado = n1 / n2;
    document.querySelector("#result").innerHTML =
      parseFloat(resultado).toFixed(2);
  }

