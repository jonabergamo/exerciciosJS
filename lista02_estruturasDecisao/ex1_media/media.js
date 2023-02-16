var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
  let n1 = Number(document.querySelector("#n1").value);
  let n2 = Number(document.querySelector("#n2").value);

  resultado = (n1 + n2) / 2;

  if (resultado >= 5) {
    document.querySelector("#result").innerHTML =
      resultado + " - " + "APROVADO";
  } else {
    document.querySelector("#result").innerHTML = resultado + " - " +"REPROVADO";
  }
}
