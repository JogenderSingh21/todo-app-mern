import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
 
    return <div style={{
        padding: "0px 20px 20px",
        margin: "20px",
        display: "inline-block",
        border: "2px solid black",  
        borderRadius: "8%",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"
    }}>
        <h1>Add a Todo</h1>
        <input style={{padding:"5px"}} type="text" placeholder="Title" onChange={(e) => {
            setTitle(e.target.value);
        }}/><br /><br />
        <input style={{padding:"5px"}} type="text" placeholder="Description" onChange={(e) => {
            setDescription(e.target.value);
        }}/><br /><br />

        <button style={{padding:"8px 15px", backgroundColor: "#008CBA", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer"}} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(async (res) => {
                const json = await res.json();
                alert(`${json.msg}`);   
            })
        }}>Add a todo</button>
    </div>
}