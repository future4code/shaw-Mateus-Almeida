describe("teste exercicio 1", ()=>{
    test("meu primeiro teste ", ()=>{
        interface User {
            name: string, 
            balance: number
        }
        function comparacaoLimite ( user: User , value : number): User | undefined{
            return {
                ...user,
                balance: user.balance - value
            }
        }
        // criei a logica seguindo a parte de comparacao para saber valor e se a pessoa conseguira comprar 
// agora irei tentar fazer o teste para ver se a pessoa  tem o limite 
// e tentarei chamar as funçoes por callback
  test("testando se tem caixa ", ()=>{
    const user: User ={
        name: "mateus",
        balance: 80
    }
    const resultado = comparacaoLimite(user , 50)
    expect(resultado).toEqual({
        ...user, 
        balance: 0
    })
  })
    })
})

/*

 sempre que rodo o teste acima eu consigo esse erro

 > jest-template@1.0.0 test
> jest

 FAIL  tests/index.test.ts
  ● teste exercicio 1 › meu primeiro teste 

    Tests cannot be nested. Test "testando se tem caixa " cannot run because it is nested within "meu primeiro teste ".

      14 | // agora irei tentar fazer o teste para ver se a pessoa  tem o limite 
      15 | // e tentarei chamar as funçoes por callback
    > 16 |   test("testando se tem caixa ", ()=>{
         |   ^
      17 |     const user: User ={
      18 |         name: "mateus",
      19 |         balance: 80

      at eventHandler (node_modules/jest-circus/build/eventHandler.js:183:11)
      at Object.<anonymous> (tests/index.test.ts:16:3)

 FAIL  tests/index1.test.ts
  ● Test suite failed to run

    Your test suite must contain at least one test.

      at onResult (node_modules/@jest/core/build/TestScheduler.js:175:18)
      at node_modules/@jest/core/build/TestScheduler.js:316:17
      at node_modules/emittery/index.js:260:13
          at Array.map (<anonymous>)
      at Emittery.emit (node_modules/emittery/index.js:258:23)

Test Suites: 2 failed, 2 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.386 s
Ran all test suites.
mateus@Mateus-DEV:~/Área de Trabalho/mateus/shaw-Mateus-Almeida/modulo-5/testes-automatizados-javascript$ npm run test

> jest-template@1.0.0 test
> jest

 FAIL  tests/index.test.ts
  ● teste exercicio 1 › meu primeiro teste 

    Tests cannot be nested. Test "testando se tem caixa " cannot run because it is nested within "meu primeiro teste ".

      14 | // agora irei tentar fazer o teste para ver se a pessoa  tem o limite 
      15 | // e tentarei chamar as funçoes por callback
    > 16 |   test("testando se tem caixa ", ()=>{
         |   ^
      17 |     const user: User ={
      18 |         name: "mateus",
      19 |         balance: 80

      at eventHandler (node_modules/jest-circus/build/eventHandler.js:183:11)
      at Object.<anonymous> (tests/index.test.ts:16:3)

 FAIL  tests/index1.test.ts
  ● Test suite failed to run

    Your test suite must contain at least one test.

      at onResult (node_modules/@jest/core/build/TestScheduler.js:175:18)
      at node_modules/@jest/core/build/TestScheduler.js:316:17
      at node_modules/emittery/index.js:260:13
          at Array.map (<anonymous>)
      at Emittery.emit (node_modules/emittery/index.js:258:23)

Test Suites: 2 failed, 2 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.85 s, estimated 3 s
Ran all test suites.
*/
// nao entendi o porque da funçao de teste esta dando erro 