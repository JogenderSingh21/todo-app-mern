import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todo'
import { Navbar } from './components/Navbar';
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('incomplete');

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const json = await res.json();
      
      const newTodoList = json.todos; 
      newTodoList.sort((a, b) => (a.completed === true) - (b.completed === true));

      setTodos(newTodoList);
    });
  }, []);
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'incomplete') {
      return !todo.completed;
    }
    return true; // 'all' filter or other unknown filter
  });

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // const gradientStyle = {
  //   background: 'linear-gradient(to bottom, #aabbcc, #ddeeff)',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-start',
  //   minHeight: '100vh',
  //   padding: '10px'
  // };

  const todosContainerStyle = {
    flex: "3",
    marginRight: '20px',
  };

  const createTodoContainerStyle = {
    flex: "1",
    display:"flex",
    justifyContent: "flex-end"
  };

  return (
    // <div style={gradientStyle}>
    //   <div style={todosContainerStyle}>
    //     <h1>Your Todos:</h1>
    //     {todos.length==0 ? <h2 style={{ visibility: todos.length ? "hidden" : "visible", color:"GrayText", fontFamily:"sans-serif" }}>No Todos</h2> : <Todos todos={todos} setTodos={setTodos}></Todos>}
    //   </div>
    //   <div style={createTodoContainerStyle}>
    //     <CreateTodo setTodos={setTodos}></CreateTodo>
    //   </div>
    // </div>


    // <div style={gradientStyle}>
    //   <Navbar></Navbar>
    //   <div style={todosContainerStyle}>
    //     <div>
    //       <select id="filter" value={filter} onChange={handleFilterChange}>
    //         <option value="all">All Todos</option>
    //         <option value="completed">Completed</option>
    //         <option value="incomplete">Incomplete</option>
    //       </select>
    //     </div>
    //     {filteredTodos.length === 0 ? (
    //       <h2 style={{ color: "GrayText", fontFamily: "sans-serif" }}>No Todos</h2>
    //     ) : (
    //       <Todos todos={filteredTodos} setTodos={setTodos}></Todos>
    //     )}
    //   </div>
    //   <div style={createTodoContainerStyle}>
    //     <CreateTodo setTodos={setTodos}></CreateTodo>
    //   </div>
    // </div>

    <div>
      <Navbar filter={filter} handleFilterChange={handleFilterChange} />
      <div className='container'>
        <div style={todosContainerStyle}>
          {filteredTodos.length === 0 ? (
            <h2 style={{ color: "GrayText", fontFamily: "sans-serif" }}>No Todos</h2>
          ) : (
            <Todos todos={filteredTodos} setTodos={setTodos}></Todos>
          )}
        </div>
        <div style={createTodoContainerStyle}>
          <CreateTodo setTodos={setTodos}></CreateTodo>
        </div>
      </div>
    </div>
  )
}

export default App
