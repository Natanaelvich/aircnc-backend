const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const SpotSchema = new Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
)

SpotSchema.virtual('thumbnail_url').get(function() {
  return `${process.env.URL_APP_UPLOADS ||
    'http://localhost:3333/files/'}${this.thumbnail}`
})

module.exports = mongoose.model('spots', SpotSchema)
