import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    console.log('Listagem de usuários')
    response.json([
        'diego',
        'cesar',
        'fois',
        'matheus',
    ])
})

app.listen(3333)