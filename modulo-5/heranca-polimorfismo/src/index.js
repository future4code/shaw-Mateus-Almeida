"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exercicio 1
/*
- **Herança**
    
    Vamos reforçar os conceitos de Herança e atributos estáticos
     criando um **sistema de uma loja**. Começaremos
     implementando a fase inicial desse projeto, que precisa
      de um gerenciamento de usuários.
    
    Todo usuário deve possuir 4 informações importantes: um
    identificador (*id*) único que é uma string **qualquer**;
     um email; um nome e uma senha, que será utilizada, no
     futuro, para ele *logar* na nossa aplicação. Além disso,
      há 3 tipos de usuários.
    
    Os **consumidores** são os clientes; precisamos guardar
     o número do cartão de crédito deles e o total de compras
      (em R$) que eles já realizaram no estabelecimento.
    
    Os **funcionários** são os contratados para trabalhar
    na loja e devem possuir um valor que indica o salário base
    deles.
    
    Por fim, os **vendedores** são funcionários com uma
    propriedade importante: a quantidade de vendas que eles
    já realizaram. Essa informação é necessária para calcular
     a comissão que eles vão ganhar no fim do mês.
    
    Estamos fornecendo para você duas classes para exemplificar
     o sistema. A primeira é a classe de Usuários com id, nome,
      email e senha. A segunda é a classe de Consumidor. Como o
       consumidor possui as mesmas propriedades dos usuários
        (e mais algumas), a classe `Customer` é **filha** da
        classe `User`.
    
    Abaixo estão alguns exercícios com o objetivo de guiar você
     durante a implementação desse sistema. Responda as perguntas
      em comentários no arquivo `index.`

*/
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
}
