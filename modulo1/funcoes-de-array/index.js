/* 1 , a: vai ser impresso a lsita dos objetos e seas propiedade 
ex nome , indece e e sera repetido as 3 vezes e suas posiçoes
2: a: vai aparecer o nome  do objeto 

3.a:vai retorna os 2 nomes do array tirando os lugares que tinha a chijo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)
*/


// exercico de escrita de codigo!

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
    ]

const nomesPet = pets.map((item) =>{
    console.log(item.nome)
})

// B

const salsicha =pets.filter((i) =>{
return i.raca == "Salsicha"

})
console.log(salsicha)

// C 
/*
const podles =pets.filter((i) =>{
    return i.raca == "Poodle"
    

}).map(podles.nome) =>{
    retu("oi")
}
*/
//2 
 
 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// a;
 //const nomeProduto = produtos.map((produto) =>{
   // console.log(produto.nome)
//})
// b:
//c
const nomeBebida = produtos.filter((produto) =>{
  return produto.nome , produto.categoria , produto.preco
})
