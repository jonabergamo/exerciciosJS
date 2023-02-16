var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", timer);

function timer() {
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);
    let resultado = "";
    
    if (n2 > n1) {
        while (n1 != n2 + 1) {
            if (n1 != n2) {
                resultado += `${n1}, `;
            } else {
                resultado += `${n1} `;
            }
            n1++;
        }
        document.querySelector("#result").innerHTML = resultado;
    } else {
        while (n1 != n2 - 1 ) {
            if (n2 != n1) {
                resultado += `${n2}, `;
            } else {
                resultado += `${n2} `;
            }
            n2++;
        }
        document.querySelector("#result").innerHTML = resultado;
    }
    
}
