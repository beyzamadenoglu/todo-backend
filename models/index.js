const mongoose = require("mongoose")
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  // connecting to the mongodb database name: "todo-app" locally
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) // enabling debugging information to be printed to the console for debugging purposes
mongoose.Promise = Promise 

module.exports.Todo = require("./todo") // requiring the todo model that we just created in mongodb
