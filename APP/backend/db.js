const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://khushidubeyokok:RJaOvJ61JB6E6wFB@cluster0.rnjhn.mongodb.net/todo-app');

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos",todoSchema);

module.exports={
    todo
}