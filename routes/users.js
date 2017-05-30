var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var permissions = req.session.user.permissions;
  res.json({
  	permissions: permissions,
  	isViewUserInPermissions: permissions.indexOf('VIEW_USERS') != -1
  });
});

module.exports = router;


