import express from 'express'
import cors from 'cors'
import userRouter from './routes/users'
const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)

app.listen(3000, () => console.log('servidor iniciado'))




