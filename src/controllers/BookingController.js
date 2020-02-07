const Booking = require('../models/Booking')

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers
    const { id } = req.params
    const { date } = req.body
    const booking = await Booking.create({
      date,
      user: user_id,
      spot: id,
    })

    await booking
      .populate('spot')
      .populate('user')
      .execPopulate()

    res.json(booking)
  },
  async index(req, res) {
    const bookings = await Booking.find()
      .populate('user')
      .populate('spot')
      .exec()

    res.json(bookings)
  },
}
