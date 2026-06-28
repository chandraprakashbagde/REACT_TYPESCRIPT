import { createContext } from "react";
import type Todo from "../models/todo";
import type { DelTask } from "../models/types";



export type TodoContextType = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    deleteTodo:DelTask
}

export const TodoContext = createContext<TodoContextType>({
    todos:[],
    addTodo:()=>{},
    deleteTodo:()=>{}
})