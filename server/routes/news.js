var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    exec("python3 analysis/script.py https://www.kiro7.com/news/local/coronavirus-inslee-announces-rollbacks-rules-restaurants-bars-more/XIDPHMLVOJAAREQ5YCL75367PU/", (err, stdout, stder)) => {
        res.send(stdout);
    });
});

module.exports = router;
