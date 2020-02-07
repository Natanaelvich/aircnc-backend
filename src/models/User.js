const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const UserSchema = new Schema({
  email: String,
})

module.exports = mongoose.model('users', UserSchema)
