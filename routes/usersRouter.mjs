import express from 'express'
import { createRequire } from "module"
const require = createRequire(import.meta.url);
const users = require('../users.json')

const usersRouter = express.Router()
usersRouter.get('/api/users', function (req, res, next) {
    res.status(200).json(users)
})
usersRouter.get('/api/users/:id', function (req, res) {
    const id = req.params.id
    const user = users.find(user => user.id === id)
    res.status(200).json(user)
})

usersRouter.patch('/api/users/:id', (req, res) => {
    console.log('about to patch')
    var profilData = JSON.parse(fs.readFileSync(`${__dirname}/users.json`))
    const user = profilData.find(user => user.id === req.params.id)
    if (!user) return res.status(404).json({ message: 'Not Found' });

    user.photo[user.photo.length - 1]
    user.photo = req.body.photo

    user.first_name[user.first_name.length - 1]
    user.first_name = req.body.first_name

    user.last_name[user.last_name.length - 1]
    user.last_name = req.body.last_name

    user.motto[user.motto.length - 1]
    user.motto = req.body.motto

    user.password[user.password.length - 1]
    user.password = req.body.password

    user.email[user.email.length - 1]
    user.email = req.body.email

    fs.writeFile(`${__dirname}/users.json`, JSON.stringify(user), err => {
        res.status(201).json({
            status: 'success',
            data: {
                data: user
            }
        })
    })
})

export default usersRouter