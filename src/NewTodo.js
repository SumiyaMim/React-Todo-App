import React, { useState } from 'react'
import './newtodo.css';

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title:"", desc:""});
    const { title, desc } = todo;

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:'', desc:''})
    }

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return{...oldTodo, [name]: event.target.value}
        })
    }


  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className='form_field'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' value={title} onChange={handleChange}/>
        </div>
        <div className='form_field'>
            <label htmlFor='desc'>Description</label>
            <input type='text' name='desc' id='desc' value={desc} onChange={handleChange}/>
        </div>
        <button type='submit'>ADD</button>
    </form>
  )
}

export default NewTodo

