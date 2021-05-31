const { model, Schema } = require('mongoose')

const Feedback = new Schema({
  name: String,
  email: String,
  message: String
})

module.exports = model('Feedback', Feedback)
