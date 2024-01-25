const express = require('express');
const cors = require('cors')
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
    const payLoad = req.body;
    const parsedLoad = createTodo.safeParse(payLoad);
    if(!parsedLoad.success){
        res.status(403).json({
            msg: "Incorrect Inputs"
        })
    } else{
        if(payLoad.title == "" || payLoad.description == ""){
            res.status(403).json({
                msg: "Empty Inputs"
            })
        }else{
            const todoList = await Todo.findOne({
                title: payLoad.title
            });
            if(todoList){
                res.status(403).json({
                    msg: "Todo with same Title already Exists!"
                })
            }else{
                await Todo.create({
                    title: payLoad.title,
                    description: payLoad.description,
                    completed: false
                });
        
                res.json({
                    msg: "Todo created successfully"
                })
            }
        }
        
    }
})

app.get("/todos", async (req, res) => {
    const todoList = await Todo.find({});
    res.json({
        todos: todoList
    });
})

app.put("/completed", async (req, res) => {
    const payLoad = req.body;
    const parsedLoad = updateTodo.safeParse(payLoad);
    if(!parsedLoad.success){
        res.status(403).json({
            msg: "Incorrect Inputs"
        })
    } else{
        const thatTodo = await Todo.findOne({
            _id: req.body.id
        });
        if(thatTodo.completed){
            res.json({
                msg: "Todo already completed"
            })
        } else{
            await Todo.updateOne({
                _id: req.body.id
            }, {
                completed: true
            }) 
            res.json({
                msg: "Todo marked as completed"
            })
        }
    }
})

app.listen(3000);