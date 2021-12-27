var express = require('express');
var router = express.Router();
var login_Controller=require('../controllers/loginController');


// Login
// router.get('/login', login_Controller.login_yesorno);
// router.get('/login', function(req, res, next) {
//     console.log('router.getlogin');
//     res.render('login', { title: 'Create Author' });
//   });
  /* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Create Author' });
  });
// Get catalog homepage
module.exports = router;