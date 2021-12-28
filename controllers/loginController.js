var User = require('../models/user');

var async = require('async');

// 注册
exports.register_get = function (req, res, next) {
  res.render('register', { title: 'register',passwordWrong:'' });
};
exports.register_post = function (req, res, next) {
  req.checkBody('username', 'username must be specified.').notEmpty(); //We won't force Alphanumeric, because people might have spaces.
  req.checkBody('password', 'password must be specified.').notEmpty();
  req.sanitize('username').escape();
  req.sanitize('password').escape();
  req.sanitize('username').trim();
  req.sanitize('password').trim();
  
  var errors = req.validationErrors();
  var user = new User ({
    username: req.body.username,
    password: req.body.password
  });
console.log('user',user);
  if (errors) {
    res.render('register', { title: 'register',  errors: errors,passwordWrong:'' });
    return;
  }
  else {
    User.findOne({username: req.body.username}).exec(function (err, person) {
      console.log('person',person);
      if(err){
        console.log(err);
      }else{
        if(person===null){
          user.save(function (err) {
            if (err) return next(err);
            res.redirect('/login');
            res.render('login', { title: 'login', passwordWrong:"注册成功，请重新登录！" });
          });
        }else{
          res.render('register', { title: 'register', passwordWrong:"用户名已存在！",username:req.body.username,password:req.body.password });
        }
      }
    })
  }
};

// 登录
exports.login_get = function (req, res, next) {
  res.render('login', { title: 'login',passwordWrong:'' });
};

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
    res.render('login', { title: 'login',  errors: errors,passwordWrong:'' });
    return;
  }
  else {
    var query = User.findOne({
      username: req.body.username
    });
    query.select();
    query.exec(function (err, person) {
      console.log('err',err);
      console.log('person',person);
        if (err) {
            console.log(err);
        } else {
          //判断是否注册
          if(person!==null){
            console.log(person._doc.password);
            //判断密码是否正确
            if(person._doc.password===req.body.password){
              res.redirect('/catalog');
            }else{
              res.render('login', { title: 'login', passwordWrong:"密码错误！",username:req.body.username,password:req.body.password });
            }
          }else{
            res.render('login', { title: 'login', passwordWrong:"未注册或用户名错误！",username:req.body.username,password:req.body.password });
          }
        }
    });
  }
};


// Display author list
exports.isnotmanage = function (req, res, next) {
      res.render('isnotManage', { title: 'error', message:'您不是管理员，没有权限！'});
};
