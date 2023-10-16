import { PrismaClient } from "@prisma/client";
import express from 'express';
import cors from "cors"


const prisma=new PrismaClient()
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



let transactionARR  = []

app.post('/transaction', async (req, res) => {
    try {
        const transactionData = req.body;

        // Guardar la transacción en la base de datos usando Prisma
        const createdTransaction = await prisma.user.create({
            data: transactionData
        });

        console.log('Transacción creada:', createdTransaction);
        res.status(200).json({ message: 'Transacción creada con éxito', data: createdTransaction });
      
    } catch (error) {
        console.error('Error al crear la transacción:', error);
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
    }
});

app.get('/transaction',async(req,res)=>{

   
    try {
        const searchTerm = req.query.term;
    
        // Realizar la búsqueda en la base de datos
        const users = await prisma.user.findMany({
          where: {
            OR: [
              {
                nombre: {
                  contains: searchTerm,
                  // mode no es válido aquí, puedes eliminarlo
                }
              },
              {
                email: {
                  contains: searchTerm
                }
              }
            ]
          }
        });
    
        res.status(200).json(users);
      } catch (error) {
        console.error('Error al buscar personas:', error);
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
      }

})


app.listen(port,()=>{
    console.log(`estoy ejecutandome en tal lugar http://localhost:${port}`)
})

