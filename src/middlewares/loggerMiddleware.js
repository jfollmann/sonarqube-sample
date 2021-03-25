const { hostname } = require('os');

const loggerMiddleware = (req, _res, next) => { 
  console.log(`[${hostname()}] - ${req.method} ${req.originalUrl}`);

  next();
}

module.exports = { 
  loggerMiddleware
}