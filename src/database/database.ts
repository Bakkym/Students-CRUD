// La idea es crear la función de POST en controller con este ejemplo

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createStudent() {
// const student = await prisma.students.create({
//   data: {
//     cedula: '1001519751',
//     name: 'Juan Pablo',
//     email: 'pablo@gmail.com',
//     phone: '32023438495',
//     career: 'Ing química'

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






