import authRouter from './auth.route.js'
import jsonPatchRouter from './jsonpatch.route.js'
import thumbnailRouter from './thumbnail.route.js'

const routes = (app) => {
  app.use('/api/v1/auth', authRouter)
  app.use('/api/v1/jsonpatch', jsonPatchRouter)
  app.use('/api/v1/thumbnail', thumbnailRouter)
}

export default routes
