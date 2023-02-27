import express, {Application} from 'express'
import studentRoutes from './routes/student.router'


export default function makeApp(database: Object): express.Application {
    
    const app: Application = express()
    
    app.use(express.json())
    app.use('/api', studentRoutes)




    
    return app

}





