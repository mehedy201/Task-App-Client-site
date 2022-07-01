import React, { useEffect, useState } from 'react';
import SingleTask from './SingleTask';

const AllTask = () => {


    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/new_task')
            .then(res => res.json())
            .then(data => setTask(data))
    },[])

    console.log(task)
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50 my-5">
                <div className="divider"><h2 className='text-xl font-semibold'>To Do this Task</h2></div>
                <div>
                    {
                        task.map(singleTask => <SingleTask
                        key={singleTask._id}
                        singleTask={singleTask}
                        ></SingleTask>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTask;