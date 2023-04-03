/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de BlackJack!")

    const confirmacao = confirm("Quer iniciar uma nova rodada?")
    const embaralhar =  import ('./nãoMexer.js')
    const carta = comprarCarta(embaralhar)
    const max = Number(21)
    
    
    if(confirmacao){
      let carta1User = comprarCarta()
      let carta2User = comprarCarta()
      let carta1Cpu = comprarCarta()
      let carta2Cpu = comprarCarta()
      
      let pontosUser1 = carta1User.valor + carta2User.valor
      let pontosCpu1 = carta1Cpu.valor + carta2Cpu.valor

      if(pontosUser1 === 22 || pontosCpu1 === 22){
         confirmacao = comprarCarta()
      }

      let novaCarta = confirm(`Suas cartas são ${carta1User.texto} e ${carta2User.texto} = ${pontosUser1} pontos. \nA carta do computador é ${carta1Cpu.texto} = ${carta1Cpu.valor} + carta secreta. \nDeseja comprar mais uma carta?`)

      if(novaCarta === true){
         let carta3User = comprarCarta()
         let carta3Cpu = comprarCarta()

         let pontosUser2 = pontosUser1 + carta3User.valor
         let pontosCpu2 = pontosCpu1 + carta3Cpu.valor

         console.log(`Usuário - cartas: ${carta1User.texto} ${carta2User.texto} ${carta3User.texto} - pontuação: ${pontosUser2}`)
         console.log(`Computador - cartas: ${carta1Cpu.texto} ${carta2Cpu.texto} ${carta3Cpu.texto} - pontuação: ${pontosCpu2}`)

      if(pontosUser2 > max && pontosCpu2 > max){
         console.log("Empate!")
      }else if(pontosUser2 > max){
         console.log("O computador ganhou!")
      }else if(pontosCpu2 > max){
         console.log("Você ganhou!")        
      }else if(pontosUser2 > pontosCpu2){
         console.log("Você ganhou!")
      }else if(pontosUser2 < pontosCpu2){
         console.log("O computador ganhou!")
      }else if(pontosUser2 === pontosCpu2)
         console.log("Empate!")
      }
   
   }else{
      console.log("O jogo acabou.")
}