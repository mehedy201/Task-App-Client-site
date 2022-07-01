import React from 'react';
import { FcCheckmark } from 'react-icons/fc';


const AllCompletedTask = ({singleCompletedTask, handleDelete}) => {
    const {_id, taskName, taskTitle, dateInput, taskDes} = singleCompletedTask;

    

    return (
        <div>
            {
                singleCompletedTask?.taskTitle && 
                <div className="collapse">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium flex items-center">
                          <h2 className="text-xl font-semibold mr-3">{taskName}</h2>
                          <FcCheckmark/>
                    </div>
                    <div className="collapse-content"> 
                        <h3>{taskTitle}</h3>
                        <p>Date: {dateInput}</p>
                        <p>Description: {taskDes}</p>
                        <button onClick={() => handleDelete(_id)} className='btn btn-sm mt-2 capitalize'>Delete</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default AllCompletedTask;