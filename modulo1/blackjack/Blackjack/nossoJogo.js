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
    
    
  // Sorteia uma carta. Por exemplo, o rei d


// blackjack
  let usuario =[]
    let pc =[] 
   console.log("Boas vindas ao jogo de Blackjack")
 if(confirm("que jogar uma nova rodada?")) {
   pc[0]= comprarCarta()
   usuario[0]=comprarCarta()
   pc[1]= comprarCarta()
         usuario[1]=comprarCarta()
                     }else {
                        console.log("que pena o jogo acabou!")
                         }
                           let somaCartaPc = pc[0].valor + pc[1].valor
                           let somaCartausuario = usuario[0].valor + usuario[1].valor           
                       console.log(` carta ${pc[0].texto} , valor ${pc[0].valor}  valor soma é ${somaCartaPc}`)
                     console.log(`carta ${usuario[0].texto}, valor${usuario[0].valor}, valor soma e ${somaCartausuario}`)
                   if (somaCartaPc > somaCartausuario) {
                 console.log(`pc ganhou`)
                }  else if (somaCartausuario > somaCartaPc) {
              console.log(`voce usuario ganhou`)
            }else if (somaCartausuario === somaCartaPc) {
          console.log(`empate`)
        }