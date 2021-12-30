var express = require('express');
var router = express.Router();
// Reuqire for controllers 
var book_controller = require('../controllers/bookController');
var book_instance_controller = require('../controllers/bookinstanceController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var login_Controller=require('../controllers/loginController');


// // Login
// router.get('/login', login_Controller.login_yesorno);

// Get catalog homepage
router.get('/', book_controller.index);

// console.log('login_Controller.username',login_Controller.username);
let isnotmanage= login_Controller.isnotmanage;
router.get('/book/create', isnotmanage);

/* POST request for creating Book. */
router.post('/book/create', isnotmanage);

/* GET request to delete Book. */
router.get('/book/:id/delete', isnotmanage);

// POST request to delete Book
router.post('/book/:id/delete', isnotmanage);

/* GET request to update Book. */
router.get('/book/:id/update', isnotmanage);

// POST request to update Book
router.post('/book/:id/update', isnotmanage);

/* GET request for one Book. */
router.get('/book/:id', book_controller.book_detail);

/* GET request for list of all Book items. */
router.get('/books', book_controller.book_list);


// author routes

/* GET request for creating Author. NOTE This must come before route for id (i.e. display author) */
router.get('/author/create', isnotmanage);

/* POST request for creating Author. */
router.post('/author/create', isnotmanage);

/* GET request to delete Author. */
router.get('/author/:id/delete', isnotmanage);

// POST request to delete Author
router.post('/author/:id/delete', isnotmanage);

/* GET request to update Author. */
router.get('/author/:id/update', isnotmanage);

// POST request to update Author
router.post('/author/:id/update', isnotmanage);

/* GET request for one Author. */
router.get('/author/:id', author_controller.author_detail);

/* GET request for list of all Authors. */
router.get('/authors', author_controller.author_list);  

// genre routes


/* GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id) */
router.get('/genre/create', isnotmanage);

/* POST request for creating Genre. */
router.post('/genre/create', isnotmanage);

/* GET request to delete Genre. */
router.get('/genre/:id/delete', isnotmanage);

// POST request to delete Genre
router.post('/genre/:id/delete',isnotmanage);

/* GET request to update Genre. */
router.get('/genre/:id/update', isnotmanage);

// POST request to update Genre
router.post('/genre/:id/update', isnotmanage);

/* GET request for one Genre. */
router.get('/genre/:id', genre_controller.genre_detail);

/* GET request for list of all Genre. */
router.get('/genres', genre_controller.genre_list);


// Bookinstance routes
/* GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id) */
router.get('/bookinstance/create', isnotmanage);

/* POST request for creating BookInstance. */
router.post('/bookinstance/create', isnotmanage);

/* GET request to delete BookInstance. */
router.get('/bookinstance/:id/delete', isnotmanage);

// POST request to delete BookInstance
router.post('/bookinstance/:id/delete', isnotmanage);

/* GET request to update BookInstance. */
router.get('/bookinstance/:id/update', isnotmanage);

// POST request to update BookInstance
router.post('/bookinstance/:id/update', isnotmanage);

/* GET request for one BookInstance. */
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

/* GET request for list of all BookInstance. */
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;


