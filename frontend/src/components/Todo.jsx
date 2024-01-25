export function Todos({todos}) {
    return <div>
        {todos.map((item) => {
            return <div  style={{
                padding: "10px",
                paddingTop: "0px",
                borderRadius: "10px",
                minWidth: "50vw",
                margin: "5px",
                backgroundColor: item.completed ? "lightgray" : "lightgreen",
                border: `2px solid ${item.completed ? "black" : "green"}`
            }}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button onClick={() => {
                    fetch("http://localhost:3000/completed", {
                         method: "PUT",
                        body: JSON.stringify({
                            id: item._id
                        }), 
                        headers: {
                            "content-type": "application/json"
                        }
                    }).then(async (res) => {
                        const json = await res.json();
                        alert(`${json.msg}`);
                    })
                    
                }}>{item.completed==true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}