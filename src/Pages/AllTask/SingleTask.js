import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';


const SingleTask = ({singleTask}) => {

    const {taskName} = singleTask;
    return (
        <div className='flex items-center'>
            <h1 className="text-xl p-2">{taskName} </h1>
            <AiOutlinePlusCircle/>
        </div>
    );
};

export default SingleTask;