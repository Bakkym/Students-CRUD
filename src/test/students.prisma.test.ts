
import { expect, test, describe, vi } from 'vitest'
import { createStudent, updateStudent, removeStudent, obtainStudents } from '../controllers/functions/students.function'
import prisma from '../libs/__mocks__/prisma'

vi.mock('../libs/prisma')


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

        expect(obtainStudents).toHaveBeenCalled

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
             throw new Error('student creation failed').message
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

        const deletedStudent = await removeStudent(student)

        expect(deletedStudent).toBe('student deleted')

    
    })
    test ('Fallo al intentar borrar un estudiante de la base de datos', async() => {
        const student = {
            cedula: '1033459284',
        }

        prisma.students.delete.mockRejectedValue

        const deletedStudent = await removeStudent(student)

        expect(deletedStudent).toThrowError
        
    })

})



    






















