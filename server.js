const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// const exphbs = require('express-handlebars');
// app.engine('.hbs', exphbs({ extname: '.hbs' }));
// app.set('view engine', '.hbs');

app.use(express.static('./'));			// or ./views, ./public

app.get('/', (req, res) => {
  res.send('word');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});