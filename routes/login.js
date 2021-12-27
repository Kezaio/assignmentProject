var express = require('express');
var router = express.Router();
var login_Controller=require('../controllers/loginController');
var book_controller = require('../controllers/bookController');

// Login
// router.get('/login', login_Controller.login_yesorno);
// router.get('/login', function(req, res, next) {
//     console.log('router.getlogin');
//     res.render('login', { title: 'Create Author' });
//   });
  /* GET users listing. */
router.get('/', login_Controller.login_get);
router.post('/', login_Controller.login_post);
router.get('/login', login_Controller.login_get);
router.post('/login', login_Controller.login_post);
router.get('/catalog', book_controller.index);
// router.get('/', function(req, res, next) {
//   router.get('/login', login_Controller.genre_create_get);
// });
// Get catalog homepage
module.exports = router;