import Fastpress from 'fastpress';
const app = new Fastpress();

app.get('/cat', (req, res) => {
  console.log('meow');
});

app.post('/dog', (req, res) => {
  console.log(req.body);
});

app.listen(8080, () => {
  console.log('Server listening on ' + HOST + ':' + _port);  
});