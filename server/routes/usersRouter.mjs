import express from 'express'
import { createRequire } from "module"
const require = createRequire(import.meta.url);
const users = require('../users.json')

const usersRouter = express.Router()
usersRouter.get('/api/users', function (req, res, next) {
    res.status(200).json(users)
})
usersRouter.get('/api/users/:id', function (req, res) {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    res.status(200).json(user)
})

export default usersRouter