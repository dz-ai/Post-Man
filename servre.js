const express = require('express');

const app = express();
app.use(express.static('public'))
app.use(express.json())

app.get('/submit', (req, res) => {
    res.send({res: 'get'})
})

app.post('/submit', (req, res) => {
    res.send({res: 'post'})
})

app.put('/submit', (req, res) => {
    res.send({res: 'put'})
})

app.delete('/submit', (req, res) => {
    res.send({res: 'delete'})
})

app.listen(3330, () => console.log('listen on 3330'))
