const express = require('express')

const movieApi = require('../models/movielist.js')

const movieRouter = express.Router({mergeParams: true})


movieRouter.get('/', (req, res) => {
 movieApi.getMoviesByTypeId(req.params.typeId)
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      res.send(err)
    })
})

movieRouter.get('/:movieId', (req, res) => {
 movieApi.getMovie(req.params.movieId)
    .then((movie) => {
      res.json(movie)
    })
    .catch((err) => {
      res.send(err)
    })
})

movieRouter.post('/', (req, res) => {
 movieApi.addMovie(req.body)
    .then((newMovie) => {
      res.json(newMovie)
    })
    .catch((err) => {
      res.send(err)
    })
})

movieRouter.put('/:movieId', (req, res) => {
  movieApi.updateMovie(req.params.movieId, req.body)
    .then((updatedMovie) => {
      res.json(updatedMovie)
    })
    .catch((err) => {
      res.send(err)
    })
})

movieRouter.delete('/:movieId', (req, res) => {
 movieApi.deleteMovie(req.params.movieId)
    .then(() => {
      res.send('Deleted')
    })
    .catch((err) => {
      res.send(err)
    })
})


module.exports = {
movieRouter
}
