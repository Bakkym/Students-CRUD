
// @GET METHOD

import { string } from "yargs";

test('StudentListIsAnArray_OK', async () => {
    const list = getStudents()
    expect(typeof(list)).toEqual(Array)

    
})





// @POST METHOD

test('studentAddedtoDB_OK', async () =>  {
    const cedula: string = '1001418477'
    const nombreCompleto: string = 'Juan Camilo Barrientos Herrera'
    const correo: string= 'camilo@gmail.com'
    const carrera: string = 'Ing sistemas'

    const returnedStudent = await Student({
        cedula,
        nombreCompleto,
        correo,
        carrera
    })
    expect(returnedStudent.cedula).toEqual(cedula)
    expect(returnedStudent.nombreCompleto).toEqual(nombreCompleto)
    expect(returnedStudent.correo).toEqual(correo)
    expect(returnedStudent.carrera).toEqual(carrera)

})


test('StudentAddedWithCedulaFieldEmpty', () => {
    const req:object = {
        body: {
            cedula: '',
            nombreCompleto:12232,
            correo: 'camilobh2002',
            carrera: 'Ing sistemas'
        }


    }
    const returnedStudent = addStudent(req)
    expect(returnedStudent).toThrowError

})

// @UPDATE METHOD

test('UpdateStudentNameAsANumber_Fail'), () => {
    const req: object = {
        body: {
            cedula: '1001418477',
            nombreCompleto:12232,
            correo: 'camilobh2002',
            carrera: 'Ing sistemas'
        }

    }

    const result = updateStudent(req)
    expect(result).toThrowError
}












// [{
//     cedula: '1001418477',
//     nombreCompleto : 'Juan Camilo',
//     correo: 'camilo@gmail.com',
//     celular : '3202922877',
//     carrera: 'Ing sistemas'

    
// }]