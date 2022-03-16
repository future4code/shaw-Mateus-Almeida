
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:
// vou comentar so para nao quebrar o site
/*
function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
     return  `No comparador de desigualdade ${a} === ${b} é ${a === b}`
    
}
console.log(checarIgualdade( 12, 12))

*/


// c-)Faça uma função chamada "verificaSeEMaior"
/*
 function verificaSeEMaior(a, b){

    return  `o numro  ${a} e >  ${b}  é ${a > b}`

 }

console.log(verificaSeEMaior(321, 2156))
*/

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
/*
const nomeDoUsuario=prompt( "me fale seu nome completo")
let anoDeNascimento= Number(prompt("me fale seu ano de nascimento") )
const senhaDoUsuario =prompt("digite sua senha de usuario")
const  nacionalidade= prompt("digite sua nascionalidade!")
let idade = 2022 - anoDeNascimento 
const usuario = []
const cadastro = () => {
     if (anoDeNascimento <= 18) {
            console.log("voce nao foi porque e menor de idade!")
         
     }else if (senhaDoUsuario.length < 6){
         console.log("voce nao foi cadastrado porque a senha nao tem 6 digitos!")

     }else if(nacionalidade == "brasileiro"){
console.log("voce foi cadastrado")
     }else {
         console.log("voce nao foi cadastrado")
     }
}
let objUsuario ={
    nome:nomeDoUsuario,
    ano:idade,
    senha:senhaDoUsuario,
    nascionalidade:nacionalidade 
    }
usuario.push(objUsuario)
console.log(usuario)
console.log(cadastro());


*/
 
        
     
  
// sempre em retorna que nao e brasileiro!

// Exercício 4-----------------------------------------------------------------------------------------------
/*
  let senhaUsuario1 =prompt("digite uma senha ")
const login = () => {
    const login = "labenu"
      if (senhaUsuario1.toLowerCase() === login.toLowerCase()) {
          console.log("usuario logado")
      }else {
          console.log("senha erada tente novamente!")
      }

}
console.log(login());
*/
//  desafio 4 depois!

// Exercício 5----------------------------------------------------------------------------------------------------
/*

const primeiraDose = () => {
     let nome5 =prompt("me informe seu nome")
    let vacina =prompt("digite o nome da vacina que tomou!")
   
let tempo 
let data
if(vacina === "coronavac"){
    return `Olá ${nome5}! a proxima dose da ${vacina} é daqui a ${tempo = "28 dias"}  compareça no posto .`
}else if(vacina === "astrazenica"){
    return `Olá ${nome5}! a proxima dose da ${vacina} é daqui a ${tempo = "90 dias"}  compareça no posto .`

}else {
    return `Olá ${nome5}! a proxima dose da ${vacina} é daqui a ${tempo = "90 dias"}  compareça no posto .`
}
console.log(primeiraDose())

}
console.log(primeiraDose())
*/
// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------
/*
const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    
      return { ...usuarios,nomeDoUsuario, imunizacao:"completa"}

}

console.log(segundaDose("Barbara"));
*/

// Exercício 7 --------------------------------------------------------------------------------------

//const avisoAosAtrasados = () => {
    /*
    
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta"}
    ]
    for(let i = 0; i < usuarios.length; i++){
       if (usuarios[i].imunizacao == "incompleta"){
        console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
       }
    }
    */
// nao etendi pedir explicaçao
// mais de 5 horas aki sem resolver , amanha continuo!





/*let voltarVacina =usuarios.filter(( nome, imunizacao ) =>{
    return  usuarios.nome    && usuarios.imunizacao == "incompleta"
})
console.log(voltarVacina)

 voltarVacina.nome(console.log(` ola ${voltarVacina} , volta ai para nao vira extatistica! `))

    //  Sua lógica aqui
*/ 


// DESAFIO------------------------------------------------------------------------------------------
/*
const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }
       
]
*/



 // desafio  questão 4
 
  
 const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 1999,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }
    ]
     /*
    let nome =prompt("qual seu nome")
    let senha =prompt("qual sua senha")
     const cadastroDesafio = (nomeUsuario, senhaUsuario) => {
          for(let i = 0; i < usuarios.length; i++){
              if(usuarios[i].nome === nomeUsuario && usuarios[i].senha === senhaUsuario){
                  console.log(`Usuario ${nomeUsuario} cadastrado`);
               }else{
                   console.log("Cadastro não encontrado");
                }
             }
        }
         (cadastroDesafio(nome,senha));


            */            

         // resolvido 4
   
// refatorando 3





  /*
   
   console.log(loginDesafio());
   let novoObjeto = {}
const loginDesafio = () => {
    //  Sua lógica aqui
    
    if(idade >18 && senhaa.length > 6 && nacionalidade === "brasileira" ){
            
            novoObjeto = {
            nome : nomee,
            ano :ano,
            nacionalidade: nacionalidade,
            senha: senhaa,
            vacina: vacina,
            imunizacao: imunizacao,
        }

        }else{
            console.log("Não deu para completar o cadastro!");
        }
        usuarios.push(novoObjeto)
        return usuarios
}
    let nomee = prompt(`Digite seu nome`)
    let ano = Number(prompt(`me fale seu ano de nascimento"`))
    let nacionalidade = prompt(`me fale sua nascionalidade`)
    let senhaa = prompt(`informe sua senha`)
    let vacina = prompt(`me informe  a sua vacina`)
    let imunizacao = prompt(`Digite sua imunização,completa ou incompleta`)
    let idade = 2022 - ano
   */
   
   const primeiraDoseDesafio = () => {
   //  Sua lógica aqui
   let senhaComparacao =prompt("me fale sua senha")
    for (let i = 0; i < usuarios.length; i++) {
        const usuarios[i].nome ===  senhaComparacao;
        return senhaComparacao
            
        
    }
        
    }
   
   /*
   console.log(primeiraDoseDesafio())
   
   const segundaDoseDesafio = (nomeDoUsuario) => {
       //  Sua lógica aqui
   }
   console.log(segundaDoseDesafio("ALGUM NOME AQUI"));
   
   const avisoAosAtrasadosDesafio = () => {
       //  Sua lógica aqui
   }
   console.log(avisoAosAtrasadosDesafio());
   