import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);


  function addTodo(e) {
    e.preventDefault();

    setTodo([...todo, text]);
    console.log(todo);
    setText("");
  }

  function editTodo(index) {
    const [editedValue, setValue] = useState(prompt("Enter Edited Value"))
    setTodo(todo[index] = editedValue);
    // setTodo([...todo]);
  }

  function dltTodo(index) {
    todo.splice(index, 1);
    setTodo([...todo]);
  }

  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter Todo' onChange={(e) => setText(e.target.value)} value={text} />
        <button type="submit"> Add </button>
      </form>

      <ul>
        {todo.map((item, index) => {

          return (
            <li key={index}>
              {item}
              <button onClick={() => editTodo(index)}> Edit </button>
              <button onClick={() => dltTodo(index)}> Delete </button>
            </li>
          )
        })}
      </ul>


    </>
  )
}

export default App
