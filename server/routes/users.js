var express = require('express');
var router = express.Router();
const emailUser = require("../emailUser.json");
const nodemailer = require("nodemailer");


var mem = [{
  email: 'sampleEmail1'
}, {
  email: 'sampleEmail2'
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json(mem);
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: emailUser
})

router.post('/', function(req,res,next){
  mem.push(req.body);
  res.sendStatus(200);
  transporter.sendMail({
    from: 'softengvvoles@gmail.com',
    to: req.body.email,
    subject: 'test',
    text: 'ooga chaka'
  }, function(error, info){
    if (error){
      console.log(error);
    } else {
      console.log('Email sent : ' + info.response);
    }
  }).catch();
})

module.exports = router;
