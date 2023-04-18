require("dotenv").config();
//Import cors and express modules
const express = require("express");
const cors = require("cors");
const loggerStream = require("./utils/handleLogger");
const morganBody = require("morgan-body");
//Import db connection
const dbConnectNoSql = require("./config/mongo");
const { dbConnectMysql } = require("./config/mysql");

const ENGINE_DB = process.env.ENGINE_DB;

//create express app
const app = express();
//use cors
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

//use morgan to send logs from API to an application
morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400; //2xx, 3xx
  },
});

const PORT = process.env.PORT || 3000;

/**
 * Invocamos las rutas
 */
app.use("/api", require("./routes"));

//put server to listen
app.listen(PORT, () => {
  console.log("App lista por http://localhost:" + PORT);
});

ENGINE_DB === "nosql" ? dbConnectNoSql() : dbConnectMysql();
