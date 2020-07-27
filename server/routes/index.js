var express = require('express');
var { exec }= require('child_process');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  exec("python analysis/script.py", (err, stdout, stderr) => {
    res.send(stdout);
  });
});

module.exports = router;
