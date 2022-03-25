import express from 'express'
import 'dotenv/config'
import allRoutes from './routes/index.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use('/storage', express.static(path.join(__dirname, '/storage')))

allRoutes(app)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})

export default app
