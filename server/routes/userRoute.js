import express from 'express'
import { login, recommendation, signup, updateTag ,readlater} from '../controller/userController.js'
const router=express.Router()

router.post('/login',login)
router.post('/signup',signup)
router.post('/updateTag/:id',updateTag)
router.post('/readlater/:id',readlater)
router.get('/recommendations',recommendation)



export default router