import express from 'express'
import userRouter from './routes/user.routes.js'

const app = express()

const port = 3000

app.use(express.json())

app.listen(port,()=>{
    console.log(`Servidor levantado en el puerto ${port}`)
})
/*PARA LEVANTAR NUESTRO FRONT-END */
app.use(express.static('./public'))

app.use('/user', userRouter)