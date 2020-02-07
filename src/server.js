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
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  )
  next()
})
server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 3333, () => {
  console.log('port 3333')
})
