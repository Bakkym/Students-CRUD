import express, {Application} from 'express'
import studentRoutes from './routes/students.router'
import { setupStudents } from './libs/initialSetup'




    
const app: Application = express()


setupStudents()

app.use(express.json())
app.use('/api', studentRoutes)


export default app










