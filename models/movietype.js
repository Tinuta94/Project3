const mongoose = require('./connection.js')

const TypeSchema = new mongoose.Schema({
  name: String,
  imageLink: String
})

const TypeCollection = mongoose.model('Type', TypeSchema)

function getAllTypes() {
  return TypeCollection.find()
}

function getType(typeId) {
  return TypeCollection.findById(typeId)
}

function addNewType(newType) {
  return TypeCollection.create(newType)
}

function updateType(typeId, updatedType) {
  return TypeCollection.findByIdAndUpdate(typeId, updatedType, {new: true})
}

function deleteType(typeId) {
  return TypeCollection.findByIdAndDelete(typeId)
}

module.exports = {
  getAllTypes,
  getType,
  addNewType,
  updateType,
  deleteType
}
