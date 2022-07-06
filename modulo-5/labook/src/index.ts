import dotenv from "dotenv"
import express ,{Express} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import { connection } from "./data/Connection"



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
