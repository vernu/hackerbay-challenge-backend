import { Router } from 'express'
import { jsonPatch } from '../controllers/jsonpatch.controller.js'
import { isAuthenticated } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/', isAuthenticated, jsonPatch)

export default router
