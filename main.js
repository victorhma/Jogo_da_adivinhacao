// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1




// Eventos
btnTry.addEventListener('click', handleTryClick) 
// addEventListener - addEvent = adiciona o nome do evento ('x', )| Listener = para quando eu lidar com ( , x)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// funções
function handleTryClick(event) {
    event.preventDefault() /* se deixasse sem declarar 
    o prevent id ele iria fazer o padrão de um botão dentro
    de um formulário que é enviar os dados, mas como 
    declarei que NÃO é pra fazer o padrão não acontece nada,
    as informações ficam na página (preventDefault = evitar o
    padrão)*/

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas, o número era ${randomNumber}`
    }
    
    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
        alert("Por favor insira um número de 0 a 10!")
        }

    else if (inputNumber.value == "") {
            alert("Digite um número valido, não aceita vazio");
            inputNumber.value = "";
            xAttempts = 0;
            }
    
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
