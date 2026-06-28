import type React from "react"
import Layout from "./components/Layout"
import { DefaultFormState, UserContext } from "./UserContext"
import { useState } from "react"
import type { User } from "./models/User.model"
import type { FormState } from "./models/Form.model"

const UserContextProvider: React.FC = () =>{ 
    const [users, setUsers] = useState<User[]>([])
    const [formState, setFormState] = useState<FormState>(DefaultFormState)

    const deleteUser = (userId: number):void => {
        setUsers((prevUsers)=>{
            return prevUsers.filter(user=>user.userId!==userId)
        })
    }

    const onAddNew = ()=>{
        setFormState({...DefaultFormState, showForm:true})
    }

    const onInputChanges = (event: React.ChangeEvent<HTMLInputElement>):void =>{
        setFormState((prev)=>{
            if(event.target !== null){
                return {
                    ...prev,
                    formData:{
                        ...prev.formData,
                        [event.target.name]:event.target?.value
                    }
                }
            }else{
                return prev
            }
        })
    }

    const closeForm = () =>{
        setFormState(DefaultFormState)
    }
        
    const onEdit = (user:User)=>{
        setFormState({ showForm: true, currentAction: "edit", formData: user })
    }

    const addUser = ():void => {
        setUsers((prev)=>[
            {...formState.formData, userId:Date.now() + Math.random()},
            ...prev
        ])
        closeForm()
    }
    
    const updateUser = () => {
        setUsers( prev => prev.map( usr => usr.userId === formState.formData.userId ? formState.formData : usr ))
        closeForm()
    }

    return <UserContext.Provider value={{
        users:users,
        formState,
        onInputChanges,
        onAddNew,
        onEdit,
        closeForm,
        deleteUser,
        addUser,
        updateUser,
    }}>
        <Layout/>
    </UserContext.Provider>
}

export default UserContextProvider
