const express = require('express')
const app = express()
const path = require('path');
const port = 5004

app.use(express.static(path.join(__dirname, '/frontend/build')));


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/index.html'));
// })

app.get('/names', (req, res) => {
  res.send("Telmo");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})