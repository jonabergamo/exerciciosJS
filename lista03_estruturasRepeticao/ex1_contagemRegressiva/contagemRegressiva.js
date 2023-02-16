var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", timer);

function timer() {
  let n1 = Number(document.querySelector("#n1").value);
  let resultado = "";

  if (n1 > 0) {
    while (n1 != 0) {
      if (n1 == 1) {
        resultado += `${n1}`;
        n1--;
      } else {
        resultado += `${n1},`;
        n1--;
      }
    }
    document.querySelector("#result").innerHTML = resultado;
  } else {
    while (n1 != 0) {
      if (n1 == -1) {
        resultado += `${n1}`;
        n1++;
      } else {
        resultado += `${n1},`;
        n1++;
      }
    }
    document.querySelector("#result").innerHTML = resultado;
  }
}
