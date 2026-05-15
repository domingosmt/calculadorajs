function calcular() {
    const numero1 = Number(document.getElementById("numero1").value)
    const numero2 = Number(document.getElementById("numero2").value)
    const operador = document.getElementById("operador").value
    const resultado = document.getElementById("resultado")

    console.log(numero1)
    console.log(numero2)
    console.log(operador)

    let resposta;

    if (operador == "+") {
        resposta = numero1 + numero2
    } else if (operador == "-") {
        resposta = numero1 - numero2
    } else if (operador == "*") {
        resposta = numero1 * numero2
    } else if (operador == "/") {
        resposta = numero1 / numero2
    } else {
        ErrorEvent
    }

    console.log(resposta)

    resultado.innerHTML = `O resultado de ${numero1} ${operador} ${numero2} = ${resposta}`
}