// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
  }
  
  // EXERCÍCIO 0B
  function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  
  console.log(mensagem)
  }
  ////////////
  
  // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
  
  // EXERCÍCIO 01
  function calculaAreaRetangulo() {
  const altura = Number(prompt("digite a altura do retangulo"))
  const largura = Number(prompt("digite a largura do retagulo"))
  saida = altura * largura
  console.log(saida)
  }
  
  // EXERCÍCIO 02
  function imprimeIdade() {
  let anoAtual = Number(prompt("digite o ano atual"))
  let anoNascimento = Number(prompt("digite o seu ano de nascimento"))
  let idade = anoAtual -anoNascimento
  console.log(idade)
  }
  
  // EXERCÍCIO 03
  function calculaIMC(peso, altura) {
  imc = peso /( altura * altura)
  return imc
  
  }
  
  // EXERCÍCIO 04
  function imprimeInformacoesUsuario() {
  
  const nome = prompt("digite seu nome")
  const idade = Number(prompt("digite sua idade"))
  const email = prompt("digite seu email") 
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
  }
  
  // EXERCÍCIO 05
  function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cor1 =prompt("digite a primeira cor!")
  cor2 =prompt("digite sua segunda cor!")
  cor3 =prompt("digite a terceira cor!")
  cores =[ cor1, cor2, cor3]
  console.log(cores)
  }
  
  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
  string.toUpperCase()
  return string.toUpperCase()
  
  }
  
  // EXERCÍCIO 07
  function calculaIngressosEspetaculo(custo, valorIngresso) {
  semprejuizo = custo / valorIngresso
  return semprejuizo
  
  
  }
  
  // EXERCÍCIO 08
  function checaStringsMesmoTamanho(string1, string2) {
  comparacaoString = string1.length
  comparacaostring2 = string2.length
  return comparacaoString === comparacaostring2
  }
  
  // EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
  voltar = array[0]
  return (voltar)
  }
  
  // EXERCÍCIO 10
  function retornaUltimoElemento(array) {
  comprimento = array.length 
  
  return array[comprimento -1]
  }
  
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
  comprimento = array.length
  ultimo = array[comprimento-1]
  primeiro = array[0]
  
  
  
  
  array[comprimento-1] = primeiro
  array[0] = ultimo
  
  return array
  
  // a b c d 
  
  
  
  //C = A
  // A = B
  //B = C 
  
  }
  
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
  f2 = string2.toLowerCase()
  f1 = string1.toLowerCase()
  return f1 === f2
  }
  
  // EXERCÍCIO 13
  function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 14
  function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  
  }
  