var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首頁' });
});

router.get('/KMTwiki', function(req, res, next) {
  res.render('KMTwiki', { title: '國民黨正副總統候選人' });
});

router.get('/DPPwiki', function(req, res, next) {
  res.render('DPPwiki', { title: '民進黨正副總統候選人' });
});

router.get('/TPPwiki', function(req, res, next) {
  res.render('TPPwiki', { title: '民眾黨正副總統候選人' });
});

module.exports = router;
