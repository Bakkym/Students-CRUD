
import { expect, test, describe, vi } from 'vitest'
import { createStudent, updateStudent, removeStudent, obtainStudents } from '../controllers/functions/students.function'
import prisma from '../libs/__mocks__/prisma'

vi.mock('../libs/prisma')


describe('GET METHOD', () => {
    test('Obtaining all the students from the database PASS', async () => {

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

        const allStudents = await obtainStudents()

        expect(allStudents).toHaveBeenCalled
        expect(allStudents).toBe(students)
    })

    test('Obtaining all the students from the database FAIL', async () => {
        prisma.students.findMany.mockRejectedValue(() => {
            throw new Error('student geting failed')
        })

        const allStudents = await obtainStudents()

        expect(allStudents).toThrowError


    })
})

describe('POST METHOD', () => {
    test('Adding new student to database PASS', async () =>{
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

    test('Adding new student with incomplete data Error',async () => {
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
    test("Updating a student's name and career PASS", async() => {
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

    test("Updating a student's cedula FAIL", async () => {
        const student = {
            cedula: '103353439284',
            name: 'Juan David Barrientos',
            email: 'david@gmail.com',
            phone: '32452525324',
            career: 'Ing elećtrica',
        }

        prisma.students.update.mockRejectedValue(() => {
            throw new Error('Student updating failed')
        })

        const updatedStudent = await updateStudent(student)
        expect(updatedStudent).toThrowError




        
    })
})

describe('DELETE METHOD', () => {
    test('Deleting a student from the database PASS', async () => {
        const student = {
            cedula: '1033459284',
        }

        prisma.students.delete.mockReturnValueOnce

        const deletedStudent = await removeStudent(student)

        expect(deletedStudent).toBe('student deleted')

    
    })
    test ('Deleting a student from the dataase FAIL', async() => {
        const student = {
            cedula: '1033459284',
        }

        prisma.students.delete.mockRejectedValue(() => {
            throw new Error('Student delete failed')
        })

        const deletedStudent = await removeStudent(student)
        expect(deletedStudent).toThrowError
        
    })

})



    






















