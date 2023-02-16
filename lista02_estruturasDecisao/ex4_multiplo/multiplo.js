var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
  let n1 = Number(document.querySelector("#n1").value);
  let n2 = Number(document.querySelector("#n2").value);

    if (n1 % 1 === 0 && n2 % 1 === 0) {
        if(n1 % n2 == 0){
            document.querySelector("#result").innerHTML = `[${n1}] é multiplo de [${n2}]`;
        }
        else {
            document.querySelector("#result").innerHTML = `[${n1}] não é multiplo de [${n2}]`;
        }
    } else {
        alert("Escreva somente números inteiros")
        document.querySelector("#n1").value = ""
        document.querySelector("#n2").value = ""
    }
    
}
