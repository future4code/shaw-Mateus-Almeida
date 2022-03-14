function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salario =2000;
 let bonus=qtdeCarrosVendidos * 100
 let comissao = valorTotalVendas *0.05
 let total = bonus +comissao + salario
 
 return total