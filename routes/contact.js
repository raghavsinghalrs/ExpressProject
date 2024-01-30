const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
});

router.post('/success',(req,res,next)=>{
    console.log("success");
    res.redirect("/");
})
module.exports = router;