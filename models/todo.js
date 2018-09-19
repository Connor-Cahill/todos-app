const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-app', {useNewUrlParser: true});



const Todo = mongoose.model('Todo', {
    item: String
});

module.exports = Todo
