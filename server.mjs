import { createRequire } from "module"
import bodyParser from 'body-parser'
import session from 'express-session'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import usersRouter from './routes/usersRouter.mjs'
import messagesRouter from './routes/messagesRouter.mjs'

const require = createRequire(import.meta.url);
const users = require('./users.json')
const messages = require('./messages.json')

const express = require("express")
const cors = require('cors')
const fs = require('fs')
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.port || 3000
const path = __dirname + '/build/'
const app = express()

app.set('trust proxy', 1)
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.use(usersRouter)
app.use(messagesRouter)

app.use('/', express.static(path))

//home page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

app.post('/login', async (req, res, next) => {
    let user = users.find(user => user.email == req.body.email)
    let message = messages.find(message => message.userIds[0] == user.id || message.userIds[1] == user.id)
    console.log(message)
    if (user.email && user.password) {
        res.json({
            id: user.id,
        })
        req.session.email = req.body.email
        req.session.first_name = user.first_name
        req.session.last_name = user.last_name
        req.session.birthdate = user.birthdate
        req.session.motto = user.motto
        req.session.photo = user.photo
        req.session.password = user.password
        req.session.conversations = []

        message.messages.forEach(element => {
            req.session.conversations.push(element)
        })

        req.session.save()
        console.log(req.session)
    } else {
        res.send('There was a problem')
    }
})

app.post('/signup', async (req, res, next) => {
    var data = fs.readFileSync('users.json')
    var dataUser = JSON.parse(data)
    let newUser = {
        "id": `${req.body.id}`,
        "email": `${req.body.email}`,
        "password": `${req.body.password}`,
        "first_name": `${req.body.first_name}`,
        "last_name": `${req.body.last_name}`,
        "birthdate": `${req.body.birthdate}`,
        "motto": `${req.body.motto}`,
        "starsign": `${req.body.starsign}`,
        "photo": `${req.body.photo}`,
        "liked_user_ids": `${req.body.liked_user_ids}`
    }
    dataUser.push(newUser)
    var newDataUser = JSON.stringify(dataUser)
    console.log(JSON.parse(newDataUser))
    fs.writeFileSync('users.json', newDataUser, (err) => {
        if (err) throw err
        console.log('New data added')
    })
})
app.get('/login/connect', (req, res) => {
    res.status(200).json(req.session)
})

app.listen(port)
console.log('Server started at http://localhost:' + port)