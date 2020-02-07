const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const BokkingSchema = new Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'spots',
  },
})

module.exports = mongoose.model('bokkings', BokkingSchema)
