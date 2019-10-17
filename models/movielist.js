const mongoose = require('./connection.js')

const MovieSchema = new mongoose.Schema({
  name: String,
  typeId: mongoose.Schema.Types.ObjectId,
  year: Number,
  imageLink: String
})

const MovieCollection = mongoose.model('Movie', MovieSchema)


function getAllMovies() {
  return MovieCollection.find()
}

function getMoviesByTypeId(typeId) {
  return MovieCollection.find({typeId})
}

function getMovie(movieId) {
  return MovieCollection.findById(movieId)
}

function addMovie(newMovie) {
  return MovieCollection.create(newMovie)
}

function updateMovie(movieId, updatedMovie) {
  return MovieCollection.findByIdAndUpdate(movieId, updatedMovie, {new: true})
}

function deleteMovie(movieId) {
  return MovieCollection.findByIdAndDelete(movieId)
}

module.exports = {
 getAllMovies,
 getMoviesByTypeId,
 getMovie,
 addMovie,
 updateMovie,
 deleteMovie
}
