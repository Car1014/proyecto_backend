const express = require('express');
const cors =require('cors')

const app = express()
const port= 3000

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json({
    type:"*/*"
}))

app.use(cors());




app.get('/transaction',(req,res)=>{
    res.send('hola funcionando')
})


let transactionARR  = []

app.post('/transaction',(req,res)=>{

    let transaction = req.body;
    transactionARR.push(transaction)
    console.log(transactionARR)
    //res.send('hola, post funcionando')
})

app.listen(port,()=>{
    console.log(`estoy ejecutandome en tal lugar http://localhost:${port}`)
})

