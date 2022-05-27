 
 

 type pessoas  ={
     nome:string,
     salário:number,
     setor:string,
     presencial:boolean
     

 }
 enum setorEmpresa {
    MARKETING= "marketing",
    VENDAS = "vendas",
    FINANCEIRO ="financeiro",

 }
 
 const listaJob: pessoas[] =[
	{ nome: "Marcos", salário: 2500, setor: setorEmpresa.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setorEmpresa.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setorEmpresa.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setorEmpresa.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setorEmpresa.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setorEmpresa.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setorEmpresa.MARKETING, presencial: true }
  ]
 
const filtraragem = listaJob.filter(pessoas=> pessoas.setor === setorEmpresa.MARKETING
  && pessoas.presencial === true )
  console.table(filtraragem );
  
