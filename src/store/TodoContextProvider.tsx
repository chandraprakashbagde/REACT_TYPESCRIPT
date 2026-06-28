import React, {  useState } from "react";
import type Todo from "../models/todo";
import type { DelTask } from "../models/types";
import { TodoContext, type TodoContextType } from "./TodoContext";



const TodoContextProvider: React.FC = (props) =>{
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const addTodo = (newTodo: Todo): void =>  {
        setTodos(prevTodos=>{ 
        return [newTodo, ...prevTodos]
        })
    }

    const deleteTodo: DelTask = (id) =>{
        setTodos(previusTodos => previusTodos.filter(item=>item.id!==id))
    }

    const contextValue: TodoContextType = {
        todos,
        addTodo,
        deleteTodo
    }
    return <TodoContext.Provider value={contextValue}>
        {props.children}
    </TodoContext.Provider>
}

export default TodoContextProvider