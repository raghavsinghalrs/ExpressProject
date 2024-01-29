const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

const adminroute = require('./routes/admin');
const shoproute = require('./routes/shop');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminroute);
app.use(shoproute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(port);