const express = require('express');
const status = require('statuses');
const axios = require('axios');
const fs = require('fs');

const app = express();

app.set("view engine", "ejs")
app.set("json spaces", 1);
app.use('/static', express.static('./static'));

app.get('/', (req, res) => {
  res.render('index')
});


const listener = app.listen(1000, (S) => {
  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')
  console.log(`┃ Online | Listening Port#${listener.address().port}           ┃`);
  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛')
});
