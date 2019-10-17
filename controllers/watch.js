const express = require('express')

const watchApi = require('../models/watch.js')

const watchRouter = express.Router()


watchRouter.get('/', (req, res) => {
  watchApi.getWatchItems()
    .then((watch) => {
      res.json(watch)
    })
    .catch((err) => {
      res.send(err)
    })
})

watchRouter.get('/:watchItemId', (req, res) => {
  watchApi.getSingleWatchItem(req.params.watchItemId)
    .then((watchItem) => {
      res.json(watchItem)
    })
    .then((err) => {
      res.send(err)
    })
})

watchRouter.post('/', (req, res) => {
  watchApi.addWatchItem(req.body)
    .then((watchItem) => {
      res.json(watchItem)
    })
    .then((err) => {
      res.send(err)
    })
})

watchRouter.delete('/:watchItemId', (req, res) => {
  watchApi.removeWatchItem(req.params.watchItemId)
    .then(() => {
      res.send('Deleted')
    })
    .then((err) => {
      res.send(err)
    })
})


module.exports = {
  watchRouter
}
