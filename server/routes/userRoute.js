import express from 'express'
import { login, recommendation, signup } from '../controller/userController.js'
const router=express.Router()

router.post('/login',login)
router.post('/signup',signup)
router.get('/recommendations',recommendation)



export default router