
import { validateData, validateIfCedulaOrEmailNotExist, validateIfCedulaExist} from './students.validateData'


export const validateDataMiddleware = async (req: any, res: any, next: any) => {

    const { cedula, name, email, phone, career } = req.body

    if (validateData(cedula, name, email, phone, career) && await validateIfCedulaOrEmailNotExist(cedula, email)){
        next()
    } else {

        res.send('invalid data')
    }

}

export const validateIfCedulaExistMiddleware = async (req:any, res: any, next:any) => {
    const { cedula } = req.body
    if (await validateIfCedulaExist(cedula)){
        next()

    } else {
        res.send('cedula not found')
    }



}



