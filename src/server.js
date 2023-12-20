const express = require('express');
const path = require('path');

const app = express();

const port = 3000

app.get('/', (req, res) => {
  const options = {
    root: path.join(__dirname, '..', 'public'),
  };
  res.sendFile('index.html', options);
});

app.put('/messages', (req, res) => {
  res.send('<ul><li>Hi</li><li>Hey</li></ul>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
