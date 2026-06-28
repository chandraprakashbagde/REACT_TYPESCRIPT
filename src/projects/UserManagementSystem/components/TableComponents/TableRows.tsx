import React from 'react';
import type { User } from '../../models/User.model';
import Pill from './Pill';
import ActionComponents from './ActionComponents';

const TableRows: React.FC<{user:User}> = ({user}) => {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">{user.fullName}</td>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">{user.contact}</td>
            <td className="px-6 py-4">
              <Pill gender={user.gender}/>
            </td>
            <td className="px-6 py-4">
              <ActionComponents user={user}/>
            </td>
        </tr>
    );
};

export default TableRows;