const express = require("express");
const connection = require("./src/databases/database");
const app = express();
app.use(express.json());
connection;
const employeerouter = require("./src/router/route");
app.use("/", employeerouter);
app.listen(9020, () => { console.log("server run on port 9020") });