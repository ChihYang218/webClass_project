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

router.get('/KMTpol', function(req, res, next) {
  res.render('KMTpol', { title: '國民黨參選政見' });
});

router.get('/DPPpol', function(req, res, next) {
  res.render('DPPpol', { title: '民進黨參選政見' });
});

router.get('/TPPpol', function(req, res, next) {
  res.render('TPPpol', { title: '民眾黨參選政見' });
});

module.exports = router;
