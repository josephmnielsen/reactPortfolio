const router = require('express').Router()
const { Feedback } = require('../models')

router.get('/feedback', (req, res) => {
  Feedback.find()
    .then(feedback => res.json(feedback))
    .catch(err => console.log(err))
})

router.post('/feedback', (req, res) => {
  Feedback.create(req.body)
    .then(feedback => res.json(feedback))
    .catch(err => console.log(err))
})

router.delete('/feedback/:id', (req, res) => {
  Feedback.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
