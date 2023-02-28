import { getStudents, createStudent, updateStudent, deleteStudent } from '../controllers/students.controller'
import { Router } from 'express'

const router = Router()

router.get('/students', getStudents)
router.post('/students', createStudent)
router.put('/students,', updateStudent)
router.delete('/students', deleteStudent)

export default router
