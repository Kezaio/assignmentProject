## 1）项目设计部分：

### （1）项目总体构成；

#简易图书馆管理系统

> 由Express和MongoDB制作

这是一个简单的图书馆管理系统。

（资源管理和用户登录）

主要功能包括用户的注册和登录，图书、作者、书籍体裁、图书副本的新增，编辑和删除操作。

### （2）引入的包在项目中的作用相关说明；

`express`：基于Node.js的Web开发框架。在项目中，能根据请求路径来处理客户端发出的GET等各种请求，中间件能处理HTTP请求的函数，用来完成各种特定的任务，比如检查用户是否登录、检测用户是否有权限访问等。

`bootstrap`：CSS/HTML框架，在构建页面的时候，导入bootstrap的JS、css等，通过写HTML标签调用它的类，就在网页上表现相应的效果出来，在项目中用于方便快捷地美化页面。

`mongoose`：MongoDB 数据库的模型工具，为 NodeJS 设计，工作于异步环境下，遵循的是一种模板式方法, 能够对输入的数据进行自动处理。项目中，通过mongose来连接数据库，并完成各种增删改查操作。

### （3）项目目录结构和各个部分的说明。

整个项目包括登录页面和内部管理界面。

1.登录界面：主要实现用户的登录和注册。

2.内部管理界面包括：

Home：可以查看图书馆所有的图书情况，有多少本书，有多少个作者，有多少个副本等

All books:可以查看内部包含的所有的图书。

All authors:可以查看所有的作者

All genres:可以查看所有的书籍体裁

All book-instances:可以查看图书的图书实例列表

Create new author:创建新的作者

Create new genre:创建新的籍体裁作

Create new book:创建新的书籍

Create new book instances:创建新的图书实例


## 2）使用说明书：

1.Clone, install npm dependencies and then get it running.

```shell
$ git clone https://github.com/LewisVo/Library-Management-V1  
$ cd Library-Management-V1
$ npm install 
$ DEBUG=Library-Management-V1:* npm run devstart
```

After these step head to localhost:3000 and you should see the site up and running there.
Also, you may want to go to `app.js` and replace `var mongoDB` with another value so that it suits your database setting.

2.注册并登录用户

3.点击左侧目录可以进入到对应的页面，其中包括新增，修改和查看图书、作者、书籍体裁、图书副本等

## 3）开发日记（与commit对应）

1.[Initial commit](https://github.com/Kezaio/assignmentProject/commit/044d2a31748688ff17f062bb27822df6afad412d)   初始创建项目并提交

2.[运行npm init](https://github.com/Kezaio/assignmentProject/commit/53e868e3156c5421287183e63377e6cb8348af86)  npm init 进行项目初始化

3.[新增项目初稿](https://github.com/Kezaio/assignmentProject/commit/4a6c163dc83e34b98337488f2f742c1d557701b2)  引入初始项目

4.[修改左侧导航栏的样式](https://github.com/Kezaio/assignmentProject/commit/d895963900b83118eaa4a7c20a35ef8514a67d33)修改左侧导航栏的样  修改管理界面样式

5.[新增顶部导航栏](https://github.com/Kezaio/assignmentProject/commit/0fcadb1c309a395d977ef3018e272840904dab38)   引入顶部导航，可以退出登录

6.[新增登录页面](https://github.com/Kezaio/assignmentProject/commit/5ac8ed0f4bbf0d41b7ca28c538279fafd244fdba)    添加登录和注册页面，添加登录界面路由

7.[新增登录和注册页面，并能实现登录跳转](https://github.com/Kezaio/assignmentProject/commit/15db61ad1398bfc717b1300034b77dbc825364c0) 

8.[新增登陆注册时的错误提示](https://github.com/Kezaio/assignmentProject/commit/7f6471d55aa4b790538baafbe65a5986fae1d5d3)   注册或者登录失误时能给与提示

9.[添加管理员限制](https://github.com/Kezaio/assignmentProject/commit/c8db66f5a451d11e8744ef10b27c7226fa245f3b)  

10.[修改页面样式，新增图片](https://github.com/Kezaio/assignmentProject/commit/ae6ff8ff0eff6dfc6b72d8fe65edc5448507b200)  添加部分背景图片

11.[修改readme文档](https://github.com/Kezaio/assignmentProject/commit/ecfeaf8eb70688a78bc27d3a2bcfa24998205980) 完善readme文档


## 4）Built With

* Node (via Express Framework)
* MongoDB (via Mongoose ODM)
* Pug (as a templating engine)
* Other small dependencies like
  - Async
  - Express-validator
  - Helmet
  - Moment
  - Compression

## 5）License

MIT
