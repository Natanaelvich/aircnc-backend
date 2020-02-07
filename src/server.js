import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'
import 'dotenv/config'

const server = express()

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0-gmth0.mongodb.net/omnistack08?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('connected to mongo')
  })
  .catch(() => {
    console.log('fail to connect mongo')
  })

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 3333, () => {
  console.log('port 3333')
})
