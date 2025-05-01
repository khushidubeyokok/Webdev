const express = require("express");
const { createSchema, updateSchema }=require("./types");
const { todo }=require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({}));


app.get("/todos",async function(req,res){
    const todos= await todo.find();
    res.json({
        todos
    })
})
app.post("/todos",async function(req,res){
    const createPayLoad = req.body;
    const parsedPayLoad = createSchema.safeParse(createPayLoad);
    if(!parsedPayLoad){
        return res.status(411).json({
            msg:"you sent the wrong inputs"
        });
    }
    else{
        //put it in mongo db
        await todo.create({
            title:createPayLoad.title,
            description:createPayLoad.description,
            completed: false
        })
        res.json({
            msg:"todo created"
        })
    }
})
app.put("/completed",async function(req,res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateSchema.safeParse(updatePayLoad);
    if(!parsedPayLoad){
        return res.status(411).json({
            msg:"you sent the wrong inputs"
        }); 
    }
    else{
        //mark it as updated
        const id=updatePayLoad.id;
        await todo.updateOne({
            _id:id
        },{
            completed:true
        })
        res.json({
            msg:"Todo marked as completed"
        })
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});