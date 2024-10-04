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
            tela.style.backgroundColor = "red"
            fetch('/envio',{
                method: "post",
                body: JSON.stringify({escrito:escrito})
            })
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