alert("Boas vindas ao jogo de BlackJack!")

let check = true

let cartasUser = []
let cartasPC = []

let pontuacaoUser = 0
let pontuacaoPC = 0

let maoUser
let maoPC

const sortearCartas = () => {
    for (let i = 0; i < 2; i++) {
        cartasUser.push(comprarCarta())
    }
    for (let i = 0; i < 2; i++) {
        cartasPC.push(comprarCarta())
    }
}

const verificaCarta = () => {
    if(cartasUser[0].texto === "A" && cartasUser[1].texto ==="A"){
        cartasUser = []
        cartasPC = []
        sortearCartas()
    }else if(cartasPC[0].texto === "A" && cartasPC[1].texto ==="A"){
        cartasUser = []
        cartasPC = []
        sortearCartas()
    }
}

const calcularPontos = () => {
    pontuacaoUser = 0
    pontuacaoPC = 0

    for (let i = 0; i < cartasUser.length; i++) {
        pontuacaoUser += cartasUser[i].valor       
    }
    for (let i = 0; i < cartasPC.length; i++) {
        pontuacaoPC += cartasPC[i].valor       
    }
}

const lerMaoUser = () => {
    maoUser = ""
    for (const iterator of cartasUser) {
        maoUser += iterator.texto + ""
    }
}
const lerMaoPC = () => {
    maoPC = ""
    for (const iterator of cartasPC) {
        maoPC += iterator.texto + ""
    }
}

const novaRodada = () => {
    if (confirm(`Suas cartas são ${maoUser}. A carta revelada do computador é ${cartasPC[0].texto}.\nDeseja comprar mais uma carta?`)) {
        cartasUser.push(comprarCarta())
        lerMaoUser()
        calcularPontos()
    }else{
        while (pontuacaoPC < pontuacaoUser) {
            cartasPC.push(comprarCarta())
            lerMaoPC()
            calcularPontos()
        }
        check = false
    }
}

const resultados = () => {
    let mensagem = ""
    if (pontuacaoUser === pontuacaoPC) {
        mensagem = "Empate!"        
    }else if (pontuacaoPC > 21 || (pontuacaoUser > pontuacaoPC && pontuacaoUser <= 21)) {
        mensagem = "Você ganhou!"
    }else if (pontuacaoUser > 21 || (pontuacaoPC > pontuacaoUser && pontuacaoPC <= 21)) {
        mensagem = "O computador ganhou!"
    }

    alert(`Suas cartas são ${maoUser}. Sua pontuação é ${pontuacaoUser}.\nAs cartas do computador são ${maoPC}. A pontuação do computador é ${pontuacaoPC}.\n${mensagem}`)
}

const inicioJogo = () => {
    if (confirm("Deseja jogar BlackJack?")) {
        sortearCartas()
        verificaCarta()
        calcularPontos()
        lerMaoUser()
        lerMaoPC()
        while (pontuacaoUser < 21 && check === true) {
            novaRodada()
        }
        resultados()
    }else{
        alert("O jogo acabou!")
    }
}
inicioJogo()