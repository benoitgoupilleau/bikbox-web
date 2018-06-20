const Raven = require('raven');
Raven.config(process.env.SENTRY_DSN).install();

const express = require('express');
const path = require('path');

const app = express();
app.use(Raven.requestHandler());
app.use(Raven.errorHandler());
const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running');
});
