const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))
let genre = '';
let setting = '';
let main_character_name = '';
let main_character_description = '';
let main_conflict = '';
let theme = '';
let other_char = [];
let id = 0;
let beginning = '';
let middle = '';
let ending = '';


//Use the following code for your other_char method
app.get('/api/genre', function (request,response) {
    response.send(genre);
});

app.post('/api/genre', function (request, response) {
    let genre = request.body.genre;
    response.send(genre);
});

app.get('/api/other-char', function (request, response) {
  response.send(other_char);
});

app.post('/api/other-char', (request, response) => {
  id = id + 1;
  let character = {id:id, name:request.body.name, profile:request.body.profile};
  other_char.push(character);
  response.send(character);
});

app.delete('/api/other-char/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = other_char.map(character => { return character.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that item doesn't exist");
    //404 is an "item not found error"
    return;
  }
  other_char.splice(removeIndex, 1);
  res.sendStatus(200);
  //200 actually stands for "OK!"
});

app.listen(3000, () => console.log('Server listening on port 3000!'))
