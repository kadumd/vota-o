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
    console.log(digitados.textContent)
    switch (digitados.textContent) {
        case '55':
            tela.style.backgroundColor = "red"
            break

        case '20':
            tela.style.backgroundColor = "yellow"
            break
    }
}
function apagar (){
    digitados.textContent = ""
}

confirmar.addEventListener("click", verificação)
corrige.addEventListener("click", apagar)