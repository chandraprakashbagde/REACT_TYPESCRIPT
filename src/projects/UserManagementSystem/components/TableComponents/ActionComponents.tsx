import React, { useContext } from 'react';
import type { User } from '../../models/User.model';
import { UserContext } from '../../UserContext';

const ActionComponents: React.FC<{user: User}> = ({user}) => {
    const { onEdit,  deleteUser} = useContext(UserContext)
    
    const handleOnEdit = (event:React.MouseEvent<HTMLButtonElement>):void =>{
        onEdit(user)
    }

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>):void =>{
        deleteUser(user.userId)
    }
    return (
        <div className="flex justify-center gap-2">
            <button className="rounded-md bg-yellow-500 px-4 py-1 text-white hover:bg-yellow-600" onClick={handleOnEdit}>
                Edit
            </button>

            <button className="rounded-md bg-red-500 px-4 py-1 text-white hover:bg-red-600" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

export default ActionComponents;