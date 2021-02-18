const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require("dotenv").config();

const app = express();

app.route("/").get();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is listenting on port ${PORT}`);
});