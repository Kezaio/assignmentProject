var User = require('../models/user');

var async = require('async');

// Display Author create form on GET
exports.register_get = function (req, res, next) {
  res.render('register', { title: 'register' });
};

// 注册
exports.register_post = function (req, res, next) {
  req.checkBody('username', 'username must be specified.').notEmpty(); //We won't force Alphanumeric, because people might have spaces.
  req.checkBody('password', 'password must be specified.').notEmpty();

  var errors = req.validationErrors();
  var user = new User ({
    username: req.body.username,
    password: req.body.password
  });
console.log('user',user);
  if (errors) {
    res.render('register', { title: 'register',  errors: errors });
    return;
  }
  else {
    user.save(function (err) {
      if (err) return next(err);
      res.redirect('/login');
    });
  }
};



// Handle Author create on POST
exports.login_yesorno = function (req, res, next) {
  res.render('login', { title: 'Create Author' });
};


// Display Author create form on GET
exports.login_get = function (req, res, next) {
  console.log('login_get');
  res.render('login', { title: 'Create Author' });
};

// 登录
exports.login_post = function (req, res, next) {
  req.checkBody('username', 'username must be specified.').notEmpty(); //We won't force Alphanumeric, because people might have spaces.
  req.checkBody('password', 'password must be specified.').notEmpty();

  var errors = req.validationErrors();
  var user = new User ({
    username: req.body.username,
    password: req.body.password
  });
console.log('user',user);
  if (errors) {
    res.render('login', { title: 'login',  errors: errors });
    return;
  }
  else {
    var query = User.findOne({
      username: req.body.username,
      password: req.body.password
    });
query.select();
query.exec(function (err, person) {
    if (err) {
        console.log('select failed');
    } else {
        console.log(person);
        res.redirect('/catalog');
    }
});
  }
};


// Display author list
exports.author_list = function (req, res, next) {
  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      // succesful rendering
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });
};
