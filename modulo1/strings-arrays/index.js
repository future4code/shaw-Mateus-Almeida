/* exercicio 1 
-- a. undefined

-- b. null

--11

--d. 3

-- e. [ 3,  19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

--f .9
exercicio 2 interpretação de codigo

subi num onibus em mirrocos 27
*/



// Exercícios de escrita de código 1

/*

const seuNome = prompt("digite seu nome")
 const seuEmail = prompt("digite seu email")
  console.log(`o email ${seuEmail} foi cadastrado com sucesso.seja bem vindo ${seuNome}!`)












   

  // 2
  const minhascomida=["strogonoff", "salada",  "pizza",  "feiojada", "lasanha"]
      console.log(minhascomida)
        console.log("Essas são as minhas comidas preferidas")
           console.log(minhascomida[0])
              console.log(minhascomida[1])
                console.log(minhascomida[2])
            console.log(minhascomida[3])
         console.log(minhascomida[4])
         const comidaUsuario = prompt("qual sua comida preferida?")
       minhascomida.splice(1, 1, comidaUsuario)
     console.log(minhascomida[0], minhascomida[1], minhascomida[2], minhascomida[3], minhascomida[4])








*/



    //3

   
 const listaTarefas =[]
 let respostaUm = prompt("me fale 1 coisa que voce fez hoje")
    let respostaDois = prompt("me fale segunda que voce fez hoje")
      let respostaTres = prompt("me fale a terceira coisa fez hoje")
        listaTarefas.push(respostaUm)
       listaTarefas.push(respostaDois)
    listaTarefas.push(respostaTres)
    console.log(listaTarefas)
    let respostaUsuario = prompt("me fale algo de 1 a 3 para eliminar") 
  
   listaTarefas.splice((respostaUsuario -1), 1)
   
   console.log(listaTarefas)


   
   
   