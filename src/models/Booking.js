import mongoose, { Schema } from 'mongoose'

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

export default mongoose.model('bokkings', BokkingSchema)
