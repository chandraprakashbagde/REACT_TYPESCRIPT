import React from 'react';
import type { Gender } from '../../models/User.model';

const Pill: React.FC<{gender: Gender}> = ({gender}) => {
    return (
        <span className={`rounded-full ${gender === "Male" ? "bg-blue-100 text-blue-700" : "bg-pink-100 text-pink-700"} px-3 py-1 text-sm`}>
            {gender}
        </span>
    );
};

export default Pill