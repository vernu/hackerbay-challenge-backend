import { Router } from 'express'
import { jsonPatch } from '../controllers/jsonpatch.controller.js'

const router = Router()

router.post('/', jsonPatch)

export default router
