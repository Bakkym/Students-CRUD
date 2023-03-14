import prisma from '../libs/prisma'


interface CreateStudent {
    cedula: string,
    name: string,
    email: string,
    phone: string,
    career: string
}

interface UpdateStudent {
    cedula: string,
    name?: string,
    email?: string,
    phone?: string,
    career?: string,
}

interface DeleteStudent {
    cedula: string,
}




export const getStudents = async (req: any, res: any, next: any): Promise<void> => {

    try {
        const students = await prisma.students.findMany()
    
        res.send(students)
        
    } catch (error) {
        res.status(500).send()
        
    }

}

export const postStudent = async (req: any, res: any, next: any): Promise<void> => {

    res.send(await createStudent(req.body))

}

export const putStudent = async (req: any, res: any, next: any): Promise<void> => {

    res.send(await updateStudent(req.body))


}

export const deleteStudent = async (req: any, res: any, next: any): Promise<void> => {

    res.send(await removeStudent(req.body))

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


