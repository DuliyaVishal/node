const mongoose = require("mongoose");
const url = "mongodb://localhost/employee";
const connection = mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
module.exports = connection;