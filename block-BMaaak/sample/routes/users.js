var express = require('express');
var router = express.Router();
var User = require('../models/User')
var Article = require('../models/Article')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//user form
router.get('/new', (req, res) => {
  res.render('userForm')
})

router.post('/', (req, res, next) => {
  User.create(req.body, (err, user) => {
    console.log(err, user)
  })
})

//article
router.get('/articles', (req, res) => {
  res.render('articleForm')
})

router.post('/articles', (req, res, next) => {
  req.body.tags = req.body.tags.split(',')
  Article.create(req.body, (err, user) => {
    console.log(err, user)
  })
})

module.exports = router;
