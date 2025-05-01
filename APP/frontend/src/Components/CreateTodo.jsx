import { useState } from "react";

export default function CreateTodo(props){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return(
        <div>
            <input type="text" placeholder="Title" onChange={function(e){
                setTitle(e.target.value);
            }} style={{padding:10,margin:10}}></input><br></br>
            <input type="text" placeholder="Description" onChange={function(e){
                setDescription(e.target.value);
            }} style={{padding:10,margin:10}}></input><br></br>
            <button style={{padding:10,margin:10}} 
            onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers: {
                        "Content-type":"application/json"
                    }
                })
                .then(async (res) => {
                    const json = await res.json();
                    alert("Todo added");
                })
            }}>Add a todo</button>
        </div>
    )
}