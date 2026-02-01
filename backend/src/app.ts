import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

// Sin esto, el proceso se cierra inmediatamente al ejecutarlo
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`)
})

export default app