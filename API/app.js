const express = require('express')
const userRouter = require('./routes/users.js')
const mariadb = require('mariadb')
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();


const pool = mariadb.createPool({
    host: 'localhost',
    port: process.env.DATABASE_PORT,
    database: "zurfqayh_exeo",
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PWD,
    connectionLimit: 20
});

app.use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use(userRouter(pool))
    .listen(process.env.PORT);
