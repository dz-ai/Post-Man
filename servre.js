const express = require('express');

const app = express();
app.use(express.static('public'))

app.get('/submit', (req, res) => {
    res.send('get')
})

app.post('/submit', (req, res) => {
    res.send('post')
})

app.put('/submit', (req, res) => {
    res.send('put')
})

app.delete('/submit', (req, res) => {
    res.send('delete')
})

app.listen(3330, () => console.log('listen on 3330'))
