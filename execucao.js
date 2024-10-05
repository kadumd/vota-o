const oi = document.querySelectorAll(".dedo")
const digitados = document.querySelector("#numeros-digitados")
const tela = document.querySelector("#tela")
const confirmar = document.querySelector(".confirmar")
const corrige = document.querySelector(".corrige")

function callOnClick(eve) {
    const button = eve.target
    digitados.textContent += button.textContent
}

oi.forEach(opa => {
    opa.addEventListener("click", callOnClick)
})

function verificação() {
    let escrito = digitados.textContent
    switch (escrito) {
        case '55':
            tela.style.backgroundColor = "yellow"
            fetch('/envio55', {
                method: "post",
                body: JSON.stringify({ escrito: escrito })
            })
            break

        case '40':
            tela.style.backgroundColor = "red"
            fetch('/envio40', {
                method: "post",
                body: JSON.stringify({ escrito: escrito })
            })
            break
    }
}
function apagar() {
    digitados.textContent = ""
}

confirmar.addEventListener("click", verificação)
corrige.addEventListener("click", apagar)

//pegando o servidor pra fazer a contagem HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA


const valorVermelho = document.querySelector(".valor-vermelho")
const valorAmarelo = document.querySelector(".valor-amarelo")


setInterval(async() => {
    const servidorRuim = await fetch("./lista.json")
    const servidorBom = await servidorRuim.json()
    valorVermelho.textContent = ""
    valorAmarelo.textContent = ""

    valorVermelho.textContent += servidorBom["55"]["length"]
    valorAmarelo.textContent += servidorBom["40"]["length"]
}, 100);
