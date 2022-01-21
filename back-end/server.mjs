import { createRequire } from "module"
import bodyParser from 'body-parser'
import session from 'express-session'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import usersRouter from './routes/usersRouter.mjs'
import messagesRouter from './routes/messagesRouter.mjs'
import loginRouter from "./routes/loginRouter.mjs"
const require = createRequire(import.meta.url);
const users = require('./db/users.json')
const express = require("express")
const cors = require('cors')
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.port || 3000
const path = __dirname + '/build/'
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
app.use(loginRouter)

app.use('/', express.static(path))

//home page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

//login 
app.post('/api/login', async (req, res, next) => {
    let user = users.find(user => user.email == req.body.email)
    console.log(user.email)
    if (user.email && user.password) {
        res.json({
            id: user.id,
            first_name: user.first_name
        });
    } else {
        res.send('There was a problem')
    }
})
app.post('/signup', async (req, res, next) => {
    if (req.body.email && req.body.password && req.body.first_name && req.body.last_name && req.body.birthdate && req.body.motto) {
        users.push({
            "id": 1,
            "email": `"${req.body.email}"`,
            "password": `"${req.body.password}"`,
            "first_name": `"${req.body.first_name}"`,
            "last_name": `"${req.body.last_name}"`,
            "birthdate": `"${req.body.birthdate}"`,
            "motto": `"${req.body.motto}"`,
            "starsign": ""
        })
        console.log(users)
    } else {
        res.send('Please fill all fields')
    }
})

app.listen(port);
console.log('Server started at http://localhost:' + port)