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

// Variaveis
let cartasJogador = []
let cartasComputador = []
let textoUsuario = ''
let totalUsuario = 0
let totalComputador = 0
let textoComputador = ''

// Iniciar o jogo e checar se a mao inicial sao dois A'S
let iniciarJogo = false
if(!iniciarJogo) {
   cartasJogador.push(comprarCarta())
   cartasJogador.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   if((cartasJogador[0].valor === 11 && cartasJogador[1].valor === 11) || (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11)) {
      cartasJogador = []
      cartasComputador = []
   } else {
      iniciarJogo = true
   }
}
// Rodada do usuario

let novaRodada = confirm(`Boas Vindas ao BlackJack! Gostaria de iniciar uma nova rodada?`)
if (novaRodada) {
   let comprar = confirm(`Suas cartas são ${cartasJogador[0].texto} ${cartasJogador[1].texto}. \nA carta revelada do computador é ${cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`) 
   
      while(comprar) {
         cartasJogador.push(comprarCarta())
         totalUsuario = 0
         textoUsuario = ''
         for(let carta of cartasJogador) {
            textoUsuario += carta.texto + ' '
            totalUsuario += carta.valor
         }
         if(totalUsuario >= 21) {
            break
         }
         comprar = confirm(`Suas cartas são ${textoUsuario} \nO seu total é: ${totalUsuario}.\nA carta revelada do computador é ${cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`)
      }

   
      
   
   // Rodada do computador
   
   while (totalComputador < totalUsuario && totalComputador <= 21) {
      cartasComputador.push(comprarCarta())
      totalComputador = 0
      textoComputador = ''
      for (let carta of cartasComputador) {
        textoComputador += carta.texto + ' '
        totalComputador += carta.valor
      }
    }
    comprar = alert(`Suas cartas são ${textoUsuario}\nO seu total é: ${totalUsuario}.\nAs cartas do computador são ${textoComputador}\nO total do computador é: ${totalComputador}.`)

   //  Checa vencedor

    if (totalUsuario > 21 || (cartasJogador[0].valor + cartasJogador[1].valor) > 21) {
      alert(`O total do usuário é: ${totalUsuario}\nO usuário estorou!\nO computador venceu!`)
    } else if (totalComputador > 21) {
      alert(`O total do computador é: ${totalComputador}\nO computador estorou!\nVocê venceu!`)
    } else if (totalUsuario > totalComputador || (cartasJogador[0].valor + cartasJogador[1].valor) > totalComputador) {
   alert(`O total do usuário é: ${totalUsuario}\nO usuário tem mais pontos que o computador! \nVocê venceu!`)
    } else if (totalComputador > totalUsuario || totalComputador > (cartasJogador[0].valor + cartasJogador[1].valor)) {
      alert(`O total do computador é: ${totalComputador}\nO computador tem mais pontos que o usuário\nO computador venceu!`)
    } else {
      alert(`${totalUsuario} \n${totalComputador} \nEmpate!`)
    }


 // Termina o jogo se o usuario cancelar o primeiro confirm

} else {
   alert(`O jogo acabou!`)
}

