var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  var userName = req.body.userName;
  var passWord = req.body.passWord;

  models.user.findOne({
    include: [{
      model: models.role,
      include: [{
        model: models.permission
      }]
    }],
  where: { userName: userName, passWord: passWord }
  }).then(function(user) {
    var permissions = [];
    for (i in user.roles) {
      for (j in user.roles[i].permissions) {
        if (permissions.indexOf(user.roles[i].permissions[j].permissionName) == -1) {
          permissions.push(user.roles[i].permissions[j].permissionName);
        }
      }
    }
    req.session.user = {
      id: user.id,
      permissions: permissions
    };
    res.redirect('/admin-page');
  })
});

module.exports = router;
