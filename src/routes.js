const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/uploads')

const SessionController = require('./controllers/SessionController')
const SpotsControllers = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/', (req, res) => {
  res.json({ msg: 'Hello' })
})

routes.get('/user', SessionController.index)
routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotsControllers.index)
routes.post('/spots', upload.single('thumbnail'), SpotsControllers.store)

routes.get('/dashboard', DashboardController.show)

routes.get('/spots/bookings', BookingController.index)
routes.post('/spots/:id/bookings', BookingController.store)

module.exports = routes
