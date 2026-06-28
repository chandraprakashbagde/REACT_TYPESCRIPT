import { createContext } from "react";
import type { User } from "./models/User.model";
import type { FormState } from "./models/Form.model";


export const DefaultFormState: FormState = {
    showForm: false,
    currentAction: "add",
    formData: { fullName: "", email: "", contact: "", gender: "Male", userId: 0 }
}


export const UserContext = createContext<{
    users:User[];
    formState:FormState;
    onAddNew:()=>void;
    closeForm:()=>void;
    onInputChanges:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    onEdit:(user:User)=>void
    deleteUser:(userId: number)=>void;
    addUser:()=>void;
    updateUser:()=>void;
}>({
    users:[],
    formState:DefaultFormState,
    onAddNew:()=>{},
    onInputChanges:()=>{},
    closeForm:()=>{},
    onEdit:()=>{},
    deleteUser:()=>{},
    addUser:()=>{},
    updateUser:()=>{},
});