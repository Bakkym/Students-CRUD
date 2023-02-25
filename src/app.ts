import express, {Application} from 'express'


export default function makeApp(database: any): express.Application {
    
    const app: Application = express()
    
    app.use(express.json())
    app.use('/students', (req, res, next) => {
        res.send('hola')

    })


    
    return app

}





