// 1.a : para acessar os parametros passado na linha de comando usa o process.argv
// 1 , b :
const valorNome  =process.argv[2]
const valorIdade =process.argv[3]
console.log(`ola.${valorNome}! voce tem ${valorIdade} anos.`)
 1 ,c 
const valorNome2  =process.argv[2]
const valorIdade2 = Number(process.argv[3])
const valorIdadeEmSeteAnos = Number(valorIdade2 + 7) 
console.log(`ola.${valorNome2}! voce tem ${valorIdade2 } anos. Em sete anos você terá ${valorIdadeEmSeteAnos}"`)