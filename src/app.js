const express = require ('express');
const app = express ();

const path = require('path');

app.use(express.static('public'));

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.listen(port, () => console.log('Server runing in http://localhost:'  + port));

