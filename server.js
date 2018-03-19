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


//Genre
app.get('/api/genre', function (request,response) {
    response.send(genre);
});

app.post('/api/genre', function (request, response) {
    let genre = request.body.genre;
    response.send(genre);
});

//Setting
app.get('/api/setting', function (request,response) {
    response.send(setting);
});

app.post('/api/setting', function (request, response) {
    let setting = request.body.setting;
    response.send(setting);
});

//Main Character Name
app.get('/api/main_character_name', function (request,response) {
    response.send(main_character_name);
});

app.post('/api/main_character_name', function (request, response) {
    let main_character_name = request.body.main_character_name;
    response.send(main_character_name);
});

//Main Character Description
app.get('/api/main_character_description', function (request,response) {
    response.send(main_character_description);
});

app.post('/api/main_character_description', function (request, response) {
    let main_character_description = request.body.main_character_description;
    response.send(main_character_description);
});

//Main Conflict
app.get('/api/main_conflict', function (request,response) {
    response.send(main_conflict);
});

app.post('/api/main_conflict', function (request, response) {
    let main_conflict = request.body.main_conflict;
    response.send(main_conflict);
});

//Theme
app.get('/api/theme', function (request,response) {
    response.send(theme);
});

app.post('/api/theme', function (request, response) {
    let theme = request.body.theme;
    response.send(theme);
});

//Beginning
app.get('/api/beginning', function (request,response) {
    response.send(beginning);
});

app.post('/api/beginning', function (request, response) {
    let beginning = request.body.beginning;
    response.send(beginning);
});

//Middle
app.get('/api/middle', function (request,response) {
    response.send(middle);
});

app.post('/api/middle', function (request, response) {
    let middle = request.body.middle;
    response.send(middle);
});

//Ending
app.get('/api/ending', function (request,response) {
    response.send(ending);
});

app.post('/api/ending', function (request, response) {
    let ending = request.body.ending;
    response.send(ending);
});




//Use the following code for your other_char method


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
