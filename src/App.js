import './styles.css';
import {Form} from "./components/Form"
import { useState } from 'react';
import {TodoList} from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);


  };

  const removeTodo = (todoIndex) => {
    const todosCopy = [...todos];

    todosCopy.splice(todoIndex, 1);

    setTodos(todosCopy);
  }

  return (
    <div className="App">
        <h1>
          To-Do List
        </h1>
      <Form addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
