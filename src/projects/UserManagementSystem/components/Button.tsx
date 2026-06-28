import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Button = () => {
    const { onAddNew } = useContext(UserContext) 
    return (
        <div className="mb-4 flex justify-end">
            <button
                onClick={onAddNew}
                type="button"
                className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                + Add User
            </button>
        </div>
    );
};

export default Button;