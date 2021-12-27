var express = require('express');
var router = express.Router();
var login_Controller=require('../controllers/loginController');


  /* GET users listing. */
router.get('/', login_Controller.register_get);
router.post('/', login_Controller.register_post);

// router.get('/', function(req, res, next) {
//   router.get('/login', login_Controller.genre_create_get);
// });
// Get catalog homepage
module.exports = router;