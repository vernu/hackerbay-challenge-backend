import { Router } from 'express'
import { thumbnail } from '../controllers/thumbnail.controller.js'

const router = Router()

router.post('/', thumbnail)

export default router
