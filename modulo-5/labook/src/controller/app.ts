/*import dotenv from "dotenv"
import express ,{Express} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'



dotenv.config();
const app: Express = express();
app.use(express.json())
app.use(cors())
// servidor rodando 
const server =app.listen(3003,()=>{
    if(server){
const address = server.address() as AddressInfo;
console.log("servido rodando na porta 3003");

    }else{
        console.log("servidor não esta rodando ");
        
    }
})
*/
import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

export const app = express()

app.use(cors())
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})