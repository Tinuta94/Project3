const mongoose = require('./connection.js')

const WatchSchema = new mongoose.Schema({
  item: Object
})

const WatchCollection = mongoose.model('Watch', WatchSchema)

function getWatchItems() {
  return WatchCollection.find()
}

function getSingleWatchItem(watchItem) {
  return WatchCollection.findById(watchItem)
}

function addWatchItem(watchItem) {
  return WatchCollection.create(watchItem)
}

function removeWatchItem(watchItem) {
  return WatchCollection.findByIdAndDelete(watchItem)
}

module.exports = {
  getWatchItems,
  getSingleWatchItem,
  addWatchItem,
  removeWatchItem
}
