import { getStudents, updateStudent, deleteStudent, postStudent } from '../controllers/students.controller'
import { dataMiddleware } from '../middlewares/students.middleware'
import { Router } from 'express'

const router = Router()

router.get('/students', getStudents)
router.post('/students', dataMiddleware, postStudent)
router.put('/students,', dataMiddleware,  updateStudent)
router.delete('/students', dataMiddleware, deleteStudent)

export default router
