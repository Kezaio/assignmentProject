## 1）项目设计部分：

### （1）项目总体构成；

#简易图书馆管理系统

> 由Express和MongoDB制作

只是一个死气沉沉的简单的图书馆管理系统。

（资源管理和用户登录）

### （2）引入的包在项目中的作用相关说明；

### （3）项目目录结构和各个部分的说明。

## 2）使用说明书：

每个功能的使用方法。

Clone, install npm dependencies and then get it running.

```shell
$ git clone https://github.com/LewisVo/Library-Management-V1  
$ cd Library-Management-V1
$ npm install 
$ DEBUG=Library-Management-V1:* npm run devstart
```

After these step head to localhost:3000 and you should see the site up and running there.
Also, you may want to go to `app.js` and replace `var mongoDB` with another value so that it suits your database setting.

## 3）开发日记（与commit对应

1.[Initial commit](https://github.com/Kezaio/assignmentProject/commit/044d2a31748688ff17f062bb27822df6afad412d)   初始创建项目并提交

2.[运行npm init](https://github.com/Kezaio/assignmentProject/commit/53e868e3156c5421287183e63377e6cb8348af86)  npm init 进行项目初始化

3.新增项目初稿  引入初始项目

4.

## Built With

* Node (via Express Framework)
* MongoDB (via Mongoose ODM)
* Pug (as a templating engine)
* Other small dependencies like
  - Async
  - Express-validator
  - Helmet
  - Moment
  - Compression

## Database

![](http://i.imgur.com/QIKPezt.png)

## License

MIT
