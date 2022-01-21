import express from 'express'
import { createRequire } from "module"
const require = createRequire(import.meta.url);
const users = require('../db/users.json')

const loginRouter = express.Router()
loginRouter.get('/api/home', (req, res) => {
    res.send('welcome home')
})

export default loginRouter