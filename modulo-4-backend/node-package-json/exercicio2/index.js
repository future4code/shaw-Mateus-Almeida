// 2 

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
