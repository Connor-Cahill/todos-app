const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todos');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

todoController(app);


app.listen(3000, () => {
    console.log('App is listening on port 3000');
})
