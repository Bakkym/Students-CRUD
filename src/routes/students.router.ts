import { getStudents, createStudent, updateStudent, deleteStudent } from '../controllers/students.controller'
import { Router } from 'express'

const router = Router()

router.get('/students', getStudents)

export default router
