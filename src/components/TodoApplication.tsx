import React from 'react';
import TodoContextProvider from '../store/TodoContextProvider';
import NewTodo from './NewTodo';
import Todos from './Todos';

const TodoApplication = () => {
    return <TodoContextProvider>
    <NewTodo/>
    <Todos />
  </TodoContextProvider>
}

export default TodoApplication;