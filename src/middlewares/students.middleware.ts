export const validateData = (cedula: string, name: string, email: string, phone: string, career: string ): boolean => {

    if(email && phone && career){
        
        return validateCedula(cedula) && validateName(name)
    }
    
    return false


}


export const validateCedula = (cedula: string): boolean => {

    if (cedula){
        
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

    if(name){
        let onlyLetters: boolean = /^[a-zA-Z\s]*$/.test(name)
    
        return onlyLetters

    }
    return false


}

