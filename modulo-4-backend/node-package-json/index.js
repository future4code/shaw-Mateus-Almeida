// 1.a : para acessar os parametros passado na linha de comando usa o process.argv
// 1 , b :
//const valorNome  =process.argv[2]
//const valorIdade =process.argv[3]
//console.log(`ola.${valorNome}! voce tem ${valorIdade} anos.`)
 //1 ,c 
//const valorNome2  =process.argv[2]
//const valorIdade2 = Number(process.argv[3])
//const valorIdadeEmSeteAnos = Number(valorIdade2 + 7) 
//console.log(`ola.${valorNome2}! voce tem ${valorIdade2 } anos. Em sete anos você terá ${valorIdadeEmSeteAnos}"`)

// 2 
/*
const valoRecebido1 =Number(process.argv[3])
const valoRecebido2 =Number(process.argv[4])
const op = process.argv[2]
switch(op){
	case "add":
		console.log(valoRecebido1 + valoRecebido2)
		break;
	case "sub":
		console.log(valoRecebido1 - valoRecebido2)
		break;
        case "mult":
            console.log(valoRecebido1 * valoRecebido2)
		break;
        case "div":
            console.log(valoRecebido1 / valoRecebido2)
		break;
}
*/
// 3 
const tarefa = process.argv[3]
const listaTarefas =['levar o lixo', 'arrumar casa', 'laavr banheiro ']
const novoArraylistaTarefas =listaTarefas.push(tarefa )
console.log(listaTarefas)