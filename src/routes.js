import express from 'express'
import multer from 'multer'
import uploadConfig from './config/uploads'

import SessionController from './controllers/SessionController'
import SpotsControllers from './controllers/SpotController'
import DashboardController from './controllers/DashboardController'
import BookingController from './controllers/BookingController'

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/user', SessionController.index)
routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotsControllers.index)
routes.post('/spots', upload.single('thumbnail'), SpotsControllers.store)

routes.get('/dashboard', DashboardController.show)

routes.get('/spots/bookings', BookingController.index)
routes.post('/spots/:id/bookings', BookingController.store)
export default routes
