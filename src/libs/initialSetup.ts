import {createStudent} from '../controllers/students.controller'

const students = [{
    cedula: '1001636548',
    name: 'Juan Camilo',
    email: 'camilo@gmail.com',
    phone: '3203232323',
    career: 'Ing sistemas'

}, 
{
    cedula: '1001639741',
    name: 'Juan Pablo',
    email: 'pablito3@gmail.com',
    phone: '323256245',
    career: 'Ing química'

}
]

export const setupStudents = async () => {
    await Promise.all([
         createStudent(students[0]),
         createStudent(students[1])

    ])
}