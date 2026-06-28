import React, { useContext, useRef } from 'react';
import Todo from '../models/todo';
import classes from "./NewTodo.module.css"
import { TodoContext } from '../store/TodoContext';

const NewTodo: React.FC = () => {
    const { addTodo } = useContext(TodoContext)
    const inputRefrenec = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.SubmitEvent) =>{
        event.preventDefault()
        const todoValue = inputRefrenec.current!.value

        if(todoValue.trim().length === 0){
            return
        }

        addTodo(new Todo(todoValue))
        inputRefrenec.current!.value = ""
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <label htmlFor="todo">Todo Text:</label>
            <input type="text" id="todo" ref={inputRefrenec}/>
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default NewTodo;