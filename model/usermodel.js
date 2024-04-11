const mongoose = require("mongoose");

let userschema = new mongoose.Schema({
      name: {
            type: String
      },
      email: {
            type: String
      },
      password: {
            type: String
      }
})

module.exports = mongoose.model("user", userschema);