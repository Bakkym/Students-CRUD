import app from '../app'    
import request from 'supertest'
import {validateCedula, validateName, validateData} from '../middlewares/students.middleware'





describe('validateCedula testing', () => {

    test('cédula con tamaño menor a 8 y mayor a 10 FAIL', () => {
        expect(validateCedula('111111111111')).toBe(false)
        expect(validateCedula('2442424252525')).toBe(false)
        expect(validateCedula('2323223')).toBe(false)
        expect(validateCedula('1234567890')).toBe(true)
        expect(validateCedula('12345678')).toBe(true)

    })

    test('Cedula con letras FAIL', () => {
        expect(validateCedula('ABBCFGTHYJ')).toBe(false)
        expect(validateCedula('AB2CF54H1J')).toBe(false)
        expect(validateCedula('111111111')).toBe(true)

    })

})

describe('validateName testing', () => {

    test('Nombre con números FAIL', () => {
        expect(validateName('13213131311')).toBe(false)
        expect(validateName('JUAN 3232MILO')).toBe(false)
        expect(validateName('JUAN CAMILO BARRIENTOS')).toBe(true)
    })
})

describe('validateData testing', () => {
    test('cédula con letras y nombre con números FAIL', () => {
        expect(validateData('Cédula', '123123123')).toBe(false)
        expect(validateData('1001519485', 'Juan Camilo')).toBe(true)

    })
})


    





// @GET METHOD
// devuelve un arreglo de objectos
// el código de estado es 200
// devuelve la cédula del estudiante


// @POST METHOD
// Se agrega exitosamente un estudiante en la base de datos
// Devuelve un código de estado 201
// devuelve un código de estado 400 cuando los datos están incompletos
// devuelve la cédula del estudiante que recién se creó


// @PUT METHOD
// Se actualiza exitosamente un estudiante en la base de datos
// se debe enviar mínimo un campo a actualizar
// devuelve un código de estado 200 al actualizar el estudiante
// devuelve un código de estado 400 cuando no se envía ningún campo


// @DELETE METHOD
// se borra exitosamente el estudiante de la base de datos
// devuelve un código de estado 400 en caso de no encontrar al estudiante
// devuelve un código de estado 204 después de haberse eliminado el estudiante













// // [{
// //     cedula: '1001418477',
// //     nombreCompleto : 'Juan Camilo',
// //     correo: 'camilo@gmail.com',
// //     celular : '3202922877',
// //     carrera: 'Ing sistemas'

    
// // }]