const Todo = require('../models/todo.js');

module.exports = function(app) {

    app.get('/', (req, res) => {
        Todo.find().then(todos => {
            res.render('todos-index', {todos: todos});
        })
    })
///// posts todo item
    app.post('/todos', (req, res) => {
        console.log('>>>>>>>')
        Todo.create(req.body).then(todos => {
            res.status(200).send({todos: todos});
            console.log(req.body);
        }).catch(err => {
            res.status(400).send({err: err});
            console.log(err.message);
        })
    })
////// Show indiviual todo item
    app.get('/todos/:id', (req, res) => {
        Todo.findById(req.params.id).then(todos => {
            res.render('todos-show', {todos: todos});
        }).catch((err) => {
            console.log(err.message);
        })
    })


}
