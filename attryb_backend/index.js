const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const { connection } = require("./config/db");
require("dotenv").config();
const authRoutes = require('./route/user.route');

const port = 8000 || process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("home");
});

app.use('/auth', authRoutes);


app.listen(port, async () => {
    try {
      await connection;
      console.log("Connected to db");
    } catch (error) {
      console.log(error);
    }
  
    console.log("listening to the port " + port);
  });
  