*Video demo*

# Simple Library Management System

> Made with Express and MongoDB

Just a dead simple working library management system.
(Resource management only, no user management)

### Prerequisites

A Unix-based machine with node (>5.0) and npm.

## Installing / Building

Clone, install npm dependencies and then get it running.

```shell
$ git clone https://github.com/LewisVo/Library-Management-V1  
$ cd Library-Management-V1
$ npm install 
$ DEBUG=Library-Management-V1:* npm run devstart
```

After these step head to localhost:3000 and you should see the site up and running there.
Also, you may want to go to `app.js` and replace `var mongoDB` with another value so that it suits your database setting.

## Developing

### Built With

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
