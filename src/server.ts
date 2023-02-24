import makeApp from './app'
import { database } from './database/database'

const app = makeApp(database)

app.listen(4000, () => {
    console.log('server on port', 4000)
})
