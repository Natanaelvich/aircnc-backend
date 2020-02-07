import mongoose, { Schema } from 'mongoose'

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

export default mongoose.model('spots', SpotSchema)
