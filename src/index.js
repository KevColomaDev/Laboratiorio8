import e from 'express'
import { router } from './routers/routes.js'

const app = e()
const PORT = process.env.PORT ?? 1234

app.use('/', router)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
