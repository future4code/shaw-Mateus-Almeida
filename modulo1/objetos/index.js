// exercicio interpretaçao de codigo 
// 1 
/* matheus nachtergale ,
Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
canal brasil ,19hrs */




// 2
/*
juca ,3 ,srd
juba, 3 , srd
jubo, 3 , srd
e chamado de spread, repete o que nao foi usado do padrao acima e pode adicionar qualquer coisa 
*/
// 3
/* false , undefined 
b= deu undefined porque altura nao foi definido 
*/


// exercicio escrita de codigo 

// 1

const pessoa ={
nome: "mateus",
apelidos: ["SCOOBY", "BAZINGA","salsicha"]
}
function chamarNome(zzz){
console.log(`eu sou, ${zzz.nome},mas pode me chamar de, ${zzz.apelidos[0]},${zzz.apelidos[1]},${zzz.apelidos[2]}`)

}
chamarNome(pessoa)
    const novosApelidos ={
...pessoa,
apelidos:["GG","BOB","JAO O FRANGO"]


    }
    chamarNome(novosApelidos)




// exercicio 2
let pessoa1 ={
nome: "bruno",
idade: 23 ,
profissao:"devolps",

}
let pessoa2 ={
    nome: "mateus",
    idade : 25 ,
    profissao : "barbeiro"

} 
function fun(vss) {
    return array=[vss.nome, vss.nome.length, vss.idade, vss.profissao, vss.profissao.length]
    
}


console.log(fun(pessoa1))
console.log(fun(pessoa2))



// exercicio 3

let carrinhosena=[]

 let fruta ={
 nome : "melancia",
disponibilidade : true
}
let fruta1 ={
nome : "maça",
disponibilidade : false
} 
 let fruta2 ={
nome :"pitaya",
disponibilidade : true
}
function fumm(vss) {
    carrinhosena.push(vss)
    
}
fumm(fruta)
fumm(fruta2)
fumm(fruta2)

console.log(carrinhosena)

































































