const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const SpotSchema = new Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
})

module.exports = mongoose.model('spots', SpotSchema)
