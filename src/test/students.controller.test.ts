import makeApp from '../app'
import request from 'supertest'
import {validateCedula, validateName, validateData} from '../middlewares/students.middleware'

const getStudent = jest.fn()
const createStudent = jest.fn()
const updateStudent = jest.fn()
const deleteStudent = jest.fn()

const app = makeApp({
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
})





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
        expect(validateData('Cédula', '123123123', 'camilo@gmail.com', '232323245', 'ing sistemas')).toBe(false)
        expect(validateData('1001519485', 'Juan Camilo', 'camilo@gmail.com', '2324524452', 'ing química')).toBe(true)

    })

    test('datos incompletos FAIL', () => {
        expect(validateData('1001519485', 'Juan Camilo', '', '', '')).toBe(false)
        expect(validateData('', '', '', '', '')).toBe(false)
        expect(validateData('1001519485', '', '', '', '')).toBe(false)
        expect(validateData('', 'Juan Camilo', '', '', '')).toBe(false)
        expect(validateData('1001519485', 'Juan Camilo', 'camilo@gmail.com', '2324524452', 'ing química')).toBe(true)

        
    })
})


describe('GET METHOD', () => {
    test('Obteniendo todos los estudiantes de la base de datos', async () => {
        const response = await request(app).get('/students')

        expect(response.statusCode).toBe(200)
        expect(response.body.cedula).toBe(true)
        expect(response.type).toBe(Array)

    })
})

describe('POST METHOD', () => {
    test('Agregando un estudiante a la base de datos', async () =>{
        await request(app).post('/students').send({
            cedula:'1001523456',
            name: 'Juan Camilo Barrientos',
            email: 'camilo@gmail.com',
            phone: '3202729283',
            career: 'Ing sistemas'

        })

        expect(createStudent.mock.calls.length).toBe(1)


    } )
})


describe('PUT METHOD', () => {
    test('Actualizando un estudiante en la base de datos', async() => {
        await request(app).put('/students').send({
            cedula:'1001523456',
            name: 'Juan Camilo Barrientos Herrera',
            email: 'camilo@gmail.com',
            phone: '3202729283',
            career: 'Ing sistemas'

        })
        expect(updateStudent.mock.calls.length).toBe(1)
    })
})

describe('DELETE METHOD', () => {
    test('Eliminando un estudiante de la base de datos', async () => {
        await request(app).delete('/students').send({
            cedula: '1001523456'
        })
    })

    expect(deleteStudent.mock.calls.length).toBe(1)
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
// //     cedula: '1001238477',
// //     nombreCompleto : 'Juan Camilo',
// //     correo: 'camilo@gmail.com',
// //     celular : '3202922877',
// //     carrera: 'Ing sistemas'

    
// // }]