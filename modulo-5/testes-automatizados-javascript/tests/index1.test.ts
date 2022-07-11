
// 1
/*
describe("teste de compra da performpurchase" ,()=>{
    test("meu primeiro teste",()=>{

        interface User {
            name: string
            balance: number
        }
        // funçao que ira compara se a pessoa pode ou nao comprar um item pelo dinheiro que ela tem na carteira
        function performPurchase(user: User, value: number): User | undefined {
            if(user.balance >= value) {
                return {
                    ...user,
                    balance: user.balance - value		
                }
            }
            return undefined
        }
                //performPurchase( "mateus", 17) nao entendi ainda como irei voltar os parametros 

            // quando eu crio ele assim ele funciona chamando o teste e comparando com a propia funçao que passa os valores
                // porem imagino que nao seria assim que deveria ser feito !
             expect(performPurchase).toEqual(performPurchase)
        



             // tentar entender se deve ser feito junto ou separado os testes r: sera junto pela as funçoes que estçao chamando 
             // 2
             test("Testing balance greater than value", () => {
                const user: User = {
                    name: "Astrodev",
                    balance: 50
                }
            
                const result = performPurchase(user, 50)
                
                expect(result).toEqual({
                    ...user,
                    balance: 0
                })
            })
            // a
            // passou o test e mostrou o que o usuario ira receber 
            
            test("Testing balance greater than value", () => {
                const user: User = {
                    name: "Astrodev",
                    balance: 50
                }
            
                const result = performPurchase(user, 50)
                // chamou o resultado passando o user e o balance
                expect(result).toEqual({
                    ...user,
                    balance: 0
                })
                // o que estava esperando foi o resultado contendo o user e balance 
              // e passou o balance 
            })
                    // b
            test("Testing balance greater than value", () => {
                const user: User = {
                    name: "Astrodev",
                    balance: 30
                }
            
                const result = performPurchase(user, 50)
                
                expect(result).not.toBeDefined()
            })


    })
})




*/



















// exercicio feito na aula , usar como referencia!

/*import { connection, filtraPessoa, pessoas, retornarPrimeiraPessoa, trataErro } from "../src"

describe("Meu primeiro teste", () => {

    test("Esse teste vai verificar uma string", () => {
        const nome: string = "rodrigo"

        expect(nome).toBe("rodrigo")

    })

    test("Teste de objeto", () => {
        const pessoa = {
            id: 123,
            nome: "fulano"
        }

        expect(pessoa).toEqual({
            id: 123,
            nome: "fulano"
        })

    })

    test("filtrando uma pessoa",()=>{

        const pessoaFiltrada = filtraPessoa(pessoas,123)

        expect(pessoaFiltrada).toBe({id:123,nome:"Fulano"})
    })

    test("usando o not", () => {
        const numero = 10

        expect(numero).not.toBe(5)
    })

    // teste assincronos
    test("valida funcoes assincronas , buscando a primeira pessoa da tabela user", async () => {
        try {
            const result = await retornarPrimeiraPessoa()
            
        } catch (error:any) {
            
            expect(error.message).toEqual("ER_NO_SUCH_TABLE: Table 'teacher-gabriel-mina.user2' doesn't exist")
        }

    })

    // teste de falso positivo
    test("tratativa de erro",()=>{
        expect.assertions(1)
        try {
            const error = trataErro("123","")
        } catch (error) {
            if(error instanceof Error){
                expect(error.message).toEqual("Esta faltando parametros")   
            }
        }
    })

})

*/