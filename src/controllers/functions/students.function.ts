
import prisma from '../../libs/prisma'

type CreateStudent = {
    cedula: string,
    name: string,
    email: string,
    phone: string,
    career: string
}

type UpdateStudent = {
    cedula: string,
    name?: string,
    email?: string,
    phone?: string,
    career?: string,
}

type  DeleteStudent = {
    cedula: string,
}




export const obtainStudents = async () => {
    try {
        return  await prisma.students.findMany()
        
    } catch (error) {
        return new Error('student geting failed')
    }
    
}



export const createStudent = async (student: CreateStudent) => {
    student.email = student.email.toLowerCase()
    try {
         return await prisma.students.create({
            data: student,
        })


    } catch (error) {
        return new Error('Student creation failed').message
    }
    

}


export const updateStudent = async (student: UpdateStudent) => {
    try {
        return await prisma.students.update({
            where: { cedula: student.cedula },
            data: student
    

        })


    } catch (error) {
        return new Error('Student updating failed').message

    }
}

export const removeStudent = async (student: DeleteStudent) => {
    try {
        await prisma.students.delete({
            where: { cedula: student.cedula }
        })

        return 'student deleted'


    } catch (error) {

        return new Error('Student delete failed').message
    }

}


