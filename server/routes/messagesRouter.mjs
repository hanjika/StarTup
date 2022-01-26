import express from 'express'
import { createRequire } from "module"
const require = createRequire(import.meta.url);
const messages = require('../messages.json')

const messagesRouter = express.Router()
messagesRouter.get('/api/messages', function (req, res, next) {
    res.status(200).json(messages)
})
messagesRouter.get('/api/messages/:id', function (req, res) {
    const id = parseInt(req.params.id)
    const user = messages.find(user => user.id === id)
    res.status(200).json(user)
})

export default messagesRouter