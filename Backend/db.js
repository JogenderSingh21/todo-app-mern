const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sehrawatjojo528:MyNameIsJogender@cluster0.rvqvpa9.mongodb.net/Todo-App");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = {
    Todo
}