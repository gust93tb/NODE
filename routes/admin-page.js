var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.user.findAll().then(function(users) {
    res.render('admin-page', { //RENDER SANG TRANG admin-page.ejs
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
