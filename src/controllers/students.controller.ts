import { obtainStudents, createStudent, updateStudent, removeStudent } from './functions/students.function'





export const getStudents = async (req: any, res: any, next: any): Promise<void> => {
    res.send(await obtainStudents())

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

