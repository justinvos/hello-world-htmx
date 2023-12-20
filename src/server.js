const express = require('express');
const path = require('path');
// const fs = require('node:fs/promises');

const app = express();

const port = 3000

app.get('/', (req, res) => {
  // const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
  const options = {
    root: path.join(__dirname, '..', 'public'),
    // dotfiles: 'deny',
    // headers: {
    //   'x-timestamp': Date.now(),
    //   'x-sent': true
    // }
  };
  res.sendFile('index.html', options);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
