require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes/index')
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.listen(process.env.APP_PORT);
console.log("It's working on port " + process.env.APP_PORT);