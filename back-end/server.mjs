import { createRequire } from "module"
import bodyParser from 'body-parser'
import session from 'express-session'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import usersRouter from './routes/usersRouter.mjs'
import messagesRouter from './routes/messagesRouter.mjs'
const require = createRequire(import.meta.url);
const users = require('./db/users.json')
const express = require("express")
const cors = require('cors')
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.port || 3000
const path = __dirname + '/views/'
const app = express()

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    email: '',
    first_name: '',
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.use(usersRouter)
app.use(messagesRouter)
app.use('/', express.static(path))

//home page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

//login 
app.post('/api/login', async (req, res, next) => {
    let user = users.find(user => user.email == req.body.email && user.password == req.body.password)
    console.log(user.email)
    if (user.email == req.body.email) {
        res.json({
            id: user.id,
            first_name: user.first_name
        });
    } else {
        res.send('There was a problem when trying to log in')
    }
})
app.post('/api/register', async (req, res, next) => {

})

app.listen(port);
console.log('Server started at http://localhost:' + port)