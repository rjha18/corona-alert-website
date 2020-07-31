var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json([
        {
            url: "https://www.nytimes.com/2020/07/27/opinion/pompeo-south-china-sea.html?action=click&module=Opinion&pgtype=Homepage",
            thumbnail: "https://static01.nyt.com/images/2020/07/27/opinion/27china-sea-editorial/27china-sea-editorial-square640.jpg?quality=75&auto=webp&disable=upscale&width=350",
            headline: "China’s Claims to the South China Sea Are Unlawful. Now What?",
            sent: 1
        },
        {
            url: "https://www.nytimes.com/2020/07/27/opinion/pompeo-south-china-sea.html?action=click&module=Opinion&pgtype=Homepage",
            thumbnail: "https://static01.nyt.com/images/2020/07/27/opinion/27china-sea-editorial/27china-sea-editorial-square640.jpg?quality=75&auto=webp&disable=upscale&width=350",
            headline: "China’s Claims to the South China Sea Are Unlawful. Now What?",
            sent: 0
        },        {
            url: "https://www.nytimes.com/2020/07/27/opinion/pompeo-south-china-sea.html?action=click&module=Opinion&pgtype=Homepage",
            thumbnail: "https://static01.nyt.com/images/2020/07/27/opinion/27china-sea-editorial/27china-sea-editorial-square640.jpg?quality=75&auto=webp&disable=upscale&width=350",
            headline: "China’s Claims to the South China Sea Are Unlawful. Now What?",
            sent : -1
        }
    ]);
});

module.exports = router;
