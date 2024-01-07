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

router.get('/poll', function(req, res, next) {
  res.render('poll', { title: '民調' });
});

router.get('/addPoll', function(req, res, next) {
  res.render('addPoll', { title: '新增民調' });
});

router.post('/addPoll/:n1/:n2/:n3', (req, res) => {
  req.app.locals.entries[0] += parseInt(req.params.n1);
  req.app.locals.entries[1] += parseInt(req.params.n2);
  req.app.locals.entries[2] += parseInt(req.params.n3);
  let sum = 0;
  for(let i = 0; i < 3; ++i)
    sum += req.app.locals.entries[i];
  for(let i = 0; i < 3; ++i)
    req.app.locals.entries[3+i] = parseFloat(req.app.locals.entries[i]/sum).toFixed(4)*100;
  for(let i = 0; i < 3; ++i)
    req.app.locals.entries[3+i] = req.app.locals.entries[3+i].toFixed(2);
})

module.exports = router;
