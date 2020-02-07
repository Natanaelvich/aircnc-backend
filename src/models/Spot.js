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

SpotSchema.virtual('thumbnail_url').get(function() {
  return `https://aircnc-backed.herokuapp.com/files/${this.thumbnail}`
})

module.exports = mongoose.model('spots', SpotSchema)
