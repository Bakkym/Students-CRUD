import { getStudents, updateStudent, deleteStudent, postStudent } from '../controllers/students.controller'
import { validateDataMiddleware, validateIfCedulaExistMiddleware } from '../middlewares/students.middleware'
import { Router } from 'express'

const router = Router()

router.get('/students', getStudents)
router.post('/students', validateDataMiddleware, postStudent)
router.put('/students', validateIfCedulaExistMiddleware,  updateStudent)
router.delete('/students', validateIfCedulaExistMiddleware, deleteStudent)

export default router
