const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {res.render('index', {title: 'Home'});});
app.listen(5000, (req, res) => {console.log('listening on port 5000');});