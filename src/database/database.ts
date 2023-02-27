// La idea es crear la función de POST en controller con este ejemplo

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createStudent() {
// const student = await prisma.students.create({
//   data: {
//     cedula: '1001519741',
//     name: 'Juan Camilo',
//     email: 'camilo@gmail.com',
//     phone: '32027238495',
//     career: 'Ing sistemas'

//   }
// })

// console.log(student)

}

createStudent()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })






