import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import classes from "./Todos.module.css"
import { TodoContext } from '../store/TodoContext';
const Todos: React.FC = () => {
    const {todos} = useContext(TodoContext)
    return (
        <ul className={classes.todos}>
            {
                todos.map((item, index) => <TodoItem key={index} todoItem={item}/>)
            }
        </ul>
    );
};

export default Todos;