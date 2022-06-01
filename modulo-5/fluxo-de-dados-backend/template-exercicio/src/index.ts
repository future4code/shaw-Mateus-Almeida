import express from 'express'
import cors from 'cors'
import produtos from './data';

const app = express();

app.use(express.json());
app.use(cors());
// 1
app.get('/teste', (req, res) => {
    res.send("api rodando")
})


// 3
type bodyA = {
    id: string,
    name: String,
    price: Number
}
app.post("/criandoProduto", (req, res) => {
    const idRadom = Date.now().toString()
    const { name, price }: bodyA = req.body
    produtos.push({ id: idRadom, name: name, price: price })
    res.send(produtos)
})

//4
app.get("/retornandoproduto", (req, res) => {
    res.send(produtos)
})
console.table(produtos)



app.listen(3003, function () {
    console.log("server is runing!");
});