var app = require('express');
var express = require('express');
var app = express();
const axios = require('axios');
const bp=require("body-parser");
app.use(bp.urlencoded({extended : true}));
app.use(bp.json());
app.set('view engine', 'ejs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');
var admin = require("firebase-admin");
// var serviceAccount = require("./key.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
app.get('/', async function (req, res) {
  
    res.sendFile(__dirname+"/demo.html" )

})
app.get('/login', async function (req, res) {
  
  res.sendFile(__dirname+"/login.html" )

})
app.post('/login', async function (req, res) {
  //  console.log(req.body) 
   res.sendFile(__dirname+"/aftr.html" )
  // res.sendFile(__dirname+"/login.html" )

})
app.get('/about', async function (req, res) {
  
  res.sendFile(__dirname+"/hasif.html" )

})
app.get('/t', async function (req, res) {
  
  res.sendFile(__dirname+"/tutorials.html" )

})
app.get('/plans', async function (req, res) {
  
  res.sendFile(__dirname+"/fitnessplans.html" )

})
app.get('/logup', async function (req, res) {
  
  // res.sendFile(__dirname+"/fitnessplans.html" )

})


  app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')  
    })