const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.get('/', (_, res) => {
    res.send(`<h2>Making Magic!</h2>`)
})

const users = [
    {
        user: 'MRN720',
        password: 'MaybeTomorrow'
    },
    {
        user: 'MNN1002',
        password: 'NotToday'
    },
]

const register = [
    {
        user: 'MRN720',
        password: 'MaybeTomorrow'
    }
]

const login = [
    {
        user: 'MRN720',
        password: 'MaybeTomorrow'
    }
]

server.get('/api/users', (_, res) => {
    res.status(200).json(users)
})

server.post('/api/register', (_, res) => {
    res.status(201).json(register)
})

server.post('/api/login', (_, res) => {
    if(!login){
        res.status(404).json({message: 'Incorrect Login information'})
    }else{
        res.status(200).json({message: 'Welcome!'})
    }
})

module.exports = server