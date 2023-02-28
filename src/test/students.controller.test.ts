
import { expect, test, describe, vi } from 'vitest'
import {validateCedula, validateName, validateData} from '../middlewares/students.middleware'
import { createStudent, updateStudent, deleteStudent, getStudents, DeleteStudent} from '../controllers/students.controller'
import prisma from '../libs/__mocks__/prisma'

vi.mock('../libs/prisma')


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

        const students = [{
            cedula: '5223459284',
            name: 'Juan David Barrientos',
            email: 'davi3d@gmail.com',
            phone: '32452525324',
            career: 'Ing elećtrica',
        },{
            cedula: '1001424252',
            name: 'Juan José',
            email: 'josé@gmail.com',
            phone: '4255242423',
            career: 'Ing bioquimica',

        }]


        prisma.students.findMany.mockResolvedValue(students)

        expect(getStudents).toHaveBeenCalled

    })
})

describe('POST METHOD', () => {
    test('Agregando un estudiante a la base de datos PASS', async () =>{
        const student = {
            cedula: '5223459284',
            name: 'Juan David Barrientos',
            email: 'davi3d@gmail.com',
            phone: '32452525324',
            career: 'Ing elećtrica',
        }

        prisma.students.create.mockResolvedValue(student)

        const studentCreated = await createStudent(student)


         expect(studentCreated).toStrictEqual(student)


    })

    test('Agregando un estudiante con datos incompletos Error',async () => {
        const student = {
            cedula: '5223459284',
            name: '',
            email: '',
            phone: '32452525324',
            career: '',
        }

        prisma.students.create.mockRejectedValue(() => {
             throw new Error('student creation failed')
        })

        const studentCreated = await createStudent(student)
        expect(studentCreated).toThrowError
    })
})


describe('PUT METHOD', () => {
    test('Actualizando el nombre y carrera de un estudiante en la base de datos', async() => {
        const student = {
            cedula: '1033459284',
            name: 'Juan David Barrientos',
            email: 'david@gmail.com',
            phone: '32452525324',
            career: 'Ing elećtrica',
        }
        prisma.students.update.mockResolvedValue(student)
        
        const updatedStudent = await updateStudent(student)

        expect(updatedStudent).toStrictEqual(student)

    })
})

describe('DELETE METHOD', () => {
    test('Eliminando un estudiante de la base de datos', async () => {
        const student = {
            cedula: '1033459284',
        }

        prisma.students.delete.mockReturnValueOnce

        const deletedStudent = await deleteStudent(student)

        expect(deletedStudent).toBe('student deleted')

    
    })
    test ('Fallo al intentar borrar un estudiante de la base de datos', async() => {
        const student = {
            cedula: '1033459284',
        }

        prisma.students.delete.mockRejectedValue

        const deletedStudent = await deleteStudent(student)

        expect(deletedStudent).toThrowError
        
    })

})



    






















