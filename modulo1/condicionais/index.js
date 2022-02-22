/* a: o codigo ele pede ao ussuario para digitar um numero
 logo em seguida armazena a uma variavel chamada numero e
 usa o if para comparar se esse numero tem resto
 b: ele ira imprrimir no console caso seja numero par porque resta 0
 c: qualquer numero impar nao passara no texte porque sempre dara sobra 

 2 : 
 a: ele serve para indetificar a fruta que á no estoque e
 falar o valor dela para o usuario
 b:"O preço da fruta ", maça, " é ", "R$ ", 2,25)
 c:"O preço da fruta ", pera, " é ", "R$ ", 5)
 
3:
a:a primeira linha esta pedido o numero ao usuario
b:undefined
c: acredito que o let mensagem nao devia estar ali
porem se o numero fosse o -10 apareceria a msg "essa msg e sacreta!!!"





 */


 // exercicio escrita de codigo
 

 const idadeUsuario= Number(prompt("me fale sua idade"))
  if (idadeUsuario >= 18) {
      console.log("voce ja pode tirar sua carteira")
    }else {
        console.log("voce nao pode dirigir!")

     }
  // exercio 2 
  const turnoMatutino =("m")
    const turnoVespertino =("v")
        const turnoNoturno =("n")
const resposta =(prompt("digite M (matutino) ou V (Vespertino) ou N (Noturno)"))
 if  (resposta === turnoMatutino){
     console.log("bom dia!")
    }else if(resposta === turnoVespertino) {
        console.log("boa tarde")
    } else {
console.log("boa noite!")


    }   
    // exercicio 3
 const turnoM =("m")
 const turnoV =("v")
 const turnoN =("n")
const resp =(prompt("digite M (matutino) ou V (Vespertino) ou N (Noturno"))   
switch (resp){
    case "m":
        console.log("bom dia!")
        break
    case "v":
        console.log("boa tarde!")
        break
    case "n":
        console.log("boa noite!") 
        break
    default :

}
// exercicio 4

 let generoPedido = "fantasia"
 let valorAceitavel= 15
 const filme=(prompt("me fale um genero de filme"))
 const valorFilme=Number(prompt("me fale o valor do filme "))
 
if (generoPedido === filme && valorAceitavel <=valorFilme){
    console.log("bom filme !")
}else {
    console.log("escolha outro genero!")

}


