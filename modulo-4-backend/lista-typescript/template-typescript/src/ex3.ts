enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function funcaoFilme( a: string, b:number,   C:GENERO , pontuaçao?: number)  {
   const  nome = a
   const anoLancamento =b  
  
    const genero:GENERO = GENERO.ACAO
    console.log(`nome: ${nome}, ano lanãmento: ${anoLancamento}, genero: ${genero}  e pontuaçao ${pontuaçao}`);
    
}
funcaoFilme("Duna", 2021, GENERO.ACAO)

