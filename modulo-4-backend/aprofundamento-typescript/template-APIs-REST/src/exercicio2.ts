/*
function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
*/ 
//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo.ts e faça a tipagem desses parâmetros

function obterEstatisticas(numeros :number[]) {
// as estradas da funçao e somente o paremetro passado para ela , o qual eu defini como number 
    const numerosOrdenados= numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas  = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
    }
console.log(obterEstatisticas([7]));

    
//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// apenas number !

//c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
type Amostra ={
    numeros:number[],
    obterEstatisticas:(numeros:number[]) => void

}

