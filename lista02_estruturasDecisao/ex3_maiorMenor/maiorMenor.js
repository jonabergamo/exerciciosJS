var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);


function calcular() {
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);

    if (n1 > n2) {
        document.querySelector("#result").innerHTML = `${n1} é o maior número`;
    } else {
        document.querySelector("#result").innerHTML = `${n2} é o maior número`;
    }

}
