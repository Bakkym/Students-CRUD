import express, {Application} from 'express'
import studentRoutes from './routes/students.router'



    
const app: Application = express()

app.use(express.json())
app.use('/api', studentRoutes)


export default app










