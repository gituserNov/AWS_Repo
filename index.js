const express = require('express')
const app = express();

/*app.get('/', (req, res) => {
  res.send('Hello World!')
});*/

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Example app listening on port 8000!')
});
