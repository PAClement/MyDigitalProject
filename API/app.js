const express = require('express')
const cors = require('cors')

const userRouter = require('./routes/users.js')
const eventRouter = require('./routes/event')
const categoryRouter = require('./routes/category')
const favoriteRouter = require('./routes/favorite')
const friendshipRouter = require('./routes/friendship')
const companyRouter = require('./routes/company')
const imageRouter = require('./routes/img')

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
    .use(cors())
    .use(bodyParser.json())
    .use(userRouter(pool))
    .use(eventRouter(pool))
    .use(categoryRouter(pool))
    .use(favoriteRouter(pool))
    .use(friendshipRouter(pool))
    .use(companyRouter(pool))
    .use(imageRouter(pool))
    .listen(process.env.PORT);
