export const validateData = (cedula:string, name: string) => {

    return validateCedula(cedula) && validateName(name)
     
}




export const validateCedula = (cedula:string): boolean => {
    let onlyNumbers: boolean = /^\d+$/.test(cedula)
    let correctLengthRange: boolean = true

    if(cedula.length > 10 || cedula.length < 8){
        correctLengthRange = false
    }

    return onlyNumbers && correctLengthRange
    

}

export const validateName = (name: string): boolean => {
    let onlyLetters: boolean = /^[a-zA-Z\s]*$/.test(name)

    return onlyLetters


}

