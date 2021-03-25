const express = require('express');
const { loggerMiddleware } = require('./middlewares/loggerMiddleware');
const { routes } = require('./router/routes')

const app = new express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(loggerMiddleware);

app.use(routes);

app.listen(port, () => {
  console.log(`App listen at http://localhost:${port}`);
});