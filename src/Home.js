import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Todos from './Todos'
import './home.css';
import NewTodo from './NewTodo';

const Home = () => {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodo) => {
            return[...prevTodo, {id: uuidv4(), todo}]
        })
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filteredTodos = todos.filter((todo) => todo.id !== id)
            return filteredTodos;
        })
    }

  return (
    <div className='container'>
        <h1>TODO APP</h1><br></br>
        <NewTodo onAddTodo={handleAddTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home
