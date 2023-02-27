import { NextFunction } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const getStudents = async (req?: any, res?: any, next?: any): Promise<void> =>{
    const students = await prisma.students.findMany()

    res.send(students)

}

export const createStudent = async (req: any, res: any, next: any): Promise<void> => {

}

export const updateStudent = async (req: any, res: any, next: any): Promise<void> => {

}

export const deleteStudent = async (req: any, res: any, next: any): Promise<void> => {

}
