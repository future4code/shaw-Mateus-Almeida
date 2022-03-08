// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
 return array.length

}







// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}







// NAO ENTENDI MUITO BEM 
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a ,b) =>a -b)
}







// EXERCÍCIO 04
function retornaNumerosPares(array) {
const novoArray = array.filter((numero) => {
    return numero % 2 === 0;
  });
  return novoArray;
/* outra forma com calback 
const comparacao = (numero) => {
    return numero % 2 === 0;
  }
const novoArray = array.filter(comparaçao);
  return novoArray;
*/

// outro metodo de realizar sem o filter
/*
let  arrayNovo = [] // ANTES DO FOR PARA NAO FICAR CRIANDO UM NOVO ARRAY DPS DO FOR 
for (let i = 0; i < array.length; i++) {
  if (array[i]% 2 === 0) {
    arrayNovo.push(array[i])
   }
}
*/
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) { // a funçao espera receber uma variavel
 let voltaPar = (arrayElemento) => { //  funçao esta sendo atribuiada a variavel volta par
     return arrayElemento % 2  === 0
 }
 let elevado2 = ( arrayElemento) => {
     return arrayElemento * arrayElemento
 }
 return array.filter(voltaPar).map(elevado2)
 // o filter esperava recebeer uma variavel e ele recebeu uma variavel que e uma funçao (calback)
}
 //array.forEach(element => {}); o element vai pecorer todos os elementos
 // quase igual o for










// EXERCÍCIO 06   , tentar fazer com objeto dps
function retornaMaiorNumero(array) {
 const maiorNumero = Math.max(...array) 
    return maiorNumero

   }












// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}










// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}









// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {


}








// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}










// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}









// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}








// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  







}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}









// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}









// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
// vou subir todas as que nao consegui fazer depois !