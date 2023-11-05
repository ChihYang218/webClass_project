var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: '介紹'});
});

router.get('/cls', function(req, res, next) {
  res.render('cls', {title: '分類'});
});

router.get('/distributed', function(req, res, next) {
  res.render('distributed', {title: '分佈'});
});

router.get('/feature', function(req, res, next) {
  res.render('feature', {title: '特徵'});
});

router.get('/habits', function(req, res, next) {
  res.render('habits', {title: '習性'});
});

module.exports = router;
