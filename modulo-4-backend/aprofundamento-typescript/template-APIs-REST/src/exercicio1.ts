//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?



const minhaString: string = "5" // ela fala que nao pode atribuir um valor de tipo numero a uma variavel de tipo string 

//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = 5 // usei o simbulo do ou para poder fazer essa string aceitar number ou string 


//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:




const Pessoa: { nome: string, idade: number, corFavorita: string } = {
    nome: "mateus alemida",
    idade: 23,
    corFavorita: "preto"
}


//`nome`, que é uma string;

//`idade`, que é um número;

//`corFavorita`, que é uma string.

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Person = {
    nome: string,
    idade: Number,
    corFavorita: string
}

//d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
   enum escolhaSuaCor {
       rosa="rosa",
       azul="azul",
       preto="preto"
   }

const grupoPessoas1: Person = {

  nome: "mateus",
    idade: 21,
    corFavorita: escolhaSuaCor.preto 

}
const grupoPessoas2: Person = {

    nome: "almeida",
      idade: 23,
      corFavorita: escolhaSuaCor.azul 
  
  }
  const grupoPessoas3: Person = {

    nome: "vinicius",
      idade: 24,
      corFavorita: escolhaSuaCor.rosa
  
  }
  
  type usuarios = Person[]

const userList:usuarios = []

userList.push(grupoPessoas1)
userList.push(grupoPessoas2)
userList.push(grupoPessoas3)

console.table(userList)
