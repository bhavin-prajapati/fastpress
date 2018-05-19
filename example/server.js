const fastpress = require('fastpress');
const app = new fastpress();

app.get('/cat', (req, res) => {
  console.log('meow');
  res.send('Hello World!')
});

app.post('/dog', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');  
});