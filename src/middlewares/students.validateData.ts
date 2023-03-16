import prisma from '../libs/prisma'


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

export const validateData = (cedula: string, name: string, email: string, phone: string, career: string): boolean => {

    if (email && phone && career) {

        return validateCedula(cedula) && validateName(name)
    }

    return false


}
export const validateIfCedulaExist = async (cedula:string) => {
    const cedulaFound = await prisma.students.findFirst({
        where: {cedula: cedula}
    })

    if (cedulaFound){
        return true
    } else {
        return false
    }
}

export const validateIfCedulaOrEmailNotExist = async(cedula: string, email: string) => {
    email = email.toLowerCase()
    const cedulaFound = await validateIfCedulaExist(cedula)

    const emailFound = await prisma.students.findFirst({
        where: {email: email}
    })

    if (cedulaFound || emailFound){
        return false
    } else {
        return true
    }

}








