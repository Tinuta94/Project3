const express = require('express')

const typeApi = require('../models/movietype.js')

const typeRouter = express.Router()


typeRouter.get('/', (req, res) => {
typeApi.getAllTypes()
    .then((types) => {
      res.json(types)
    })
    .catch((err) => {
      res.send(err)
    })
})

typeRouter.get('/:typeId', (req, res) => {
  typeApi.getType(req.params.typeId)
    .then((type) => {
      res.json(type)
    })
    .catch((err) => {
      res.send(err)
    })
})

typeRouter.get('/:typeId', (req, res) => {
  typeApi.getType(req.params.typeId)
    .then((movie) => {
      res.json(movie)
    })
    .catch((err) => {
      res.send(err)
    })
})

typeRouter.post('/', (req, res) => {
  typeApi.addNewType(req.body)
    .then((type) => {
      res.json(type)
    })
    .catch((err) => {
      res.send(err)
    })
})

typeRouter.put('/:typeId', (req, res) => {
 typeApi.updateType(req.params.typeId, req.body)
    .then((updatedType) => {
      res.json(updatedType)
    })
    .catch((err) => {
      res.send(err)
    })
})

typeRouter.delete('/:typeId', (req, res) => {
typeApi.deleteType(req.params.typeId)
    .then(() => {
      res.send('Deleted')
    })
    .catch((err) => {
      res.send(err)
    })
})


module.exports = {
  typeRouter

}
