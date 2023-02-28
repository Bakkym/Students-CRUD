

import prisma from '../libs/prisma'


export const dataMiddleware = async (req: any, res: any, next: any) => {

    const { cedula, name, email, phone, career } = req.body

    if (validateData(cedula, name, email, phone, career) && await validateIfCedulaOrEmailExist(cedula, email)){
        next()
    } else {

        res.send('invalid data')
    }

}



export const validateIfCedulaOrEmailExist = async(cedula: string, email: string) => {
    email = email.toLowerCase()


    const cedulaFound = await prisma.students.findFirst({
        where: {cedula: cedula}
    })
    const emailFound = await prisma.students.findFirst({
        where: {email: email}
    })

    if (cedulaFound || emailFound){
        return false
    } else {
        return true
    }

}




export const validateData = (cedula: string, name: string, email: string, phone: string, career: string): boolean => {

    if (email && phone && career) {

        return validateCedula(cedula) && validateName(name)
    }

    return false


}


export const validateCedula = (cedula: string): boolean => {

    if (cedula) {

        let onlyNumbers: boolean = /^\d+$/.test(cedula)
        let correctLengthRange: boolean = true

        if (cedula.length > 10 || cedula.length < 8) {
            correctLengthRange = false
        }

        return onlyNumbers && correctLengthRange
    }

    return false


}

export const validateName = (name: string): boolean => {

    if (name) {
        let onlyLetters: boolean = /^[a-zA-Z\s]*$/.test(name)

        return onlyLetters

    }
    return false


}

validateIfCedulaOrEmailExist('1001519751', 'pablito3@gmail.com')

