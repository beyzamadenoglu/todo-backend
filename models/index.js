const mongoose = require("mongoose")
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true)
mongoose.Promise = Promise 

module.exports.Todo = require("./todo") // requiring the todo model that we just created in mongodb
