const express = require('express');

const app = express();
app.use(express.static('public'))

app.listen(3330, () => console.log('listen on 3330'))
