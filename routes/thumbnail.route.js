import { Router } from 'express'
import { thumbnail } from '../controllers/thumbnail.controller.js'
import { isAuthenticated } from '../middlewares/auth.middleware.js';

const router = Router()

router.post('/', isAuthenticated, thumbnail)

export default router
