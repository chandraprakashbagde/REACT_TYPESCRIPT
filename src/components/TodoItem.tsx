import React, { useContext } from 'react';
import classes from "./TodoItem.module.css"
import type Todo from '../models/todo';
import { TodoContext } from '../store/TodoContext';
const TodoItem: React.FC<{todoItem: Todo}> = ({todoItem}) => {
    const {deleteTodo} = useContext(TodoContext)
    return <li className={classes.item}>{todoItem.text} <button onClick={deleteTodo.bind(null,todoItem.id)}>Delete</button></li>;
};

export default TodoItem;