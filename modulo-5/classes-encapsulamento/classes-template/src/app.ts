import express, {Express} from "express"
import cors from "cors"

const app: Express = express()

app.use(express.json())
app.use(cors())




// 1 - a)
// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?



//o construtor serve para mostrar para o objeto o que deve ser passado obrigatorimente 

// 1 - b)
//
class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions= [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
 
 }

const newUser = new UserAccount ("122989893" , "mateus" , 23)


// b 
// ele apareceu somente o "Chamando o construtor da classe UserAccount"

// c
//voce pode chamar pelo encapsulamento





// 2

// trasformando em classe pelo uso da palavra class 
// e usei a palavra private para deixa o acesso privado 
class Transaction {
   private date: string;
   private value: number;
   private description: string;
   // constructor para passar os valores com o this 
   constructor(date: string, value: number, description: string) {
     this.date = date;
     this.value = value;
     this.description = description
   }
}

// 3



//













app.listen(3003, ()=>{
   console.log("Server ready!")
})

export default app