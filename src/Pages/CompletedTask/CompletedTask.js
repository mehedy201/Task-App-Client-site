import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AllCompletedTask from './AllCompletedTask';

const CompletedTask = () => {


    const [completedTask, setCompletedTask] = useState([]);


    useEffect(() => {
        fetch('https://true-loonie-30043.herokuapp.com/new_task')
            .then(res => res.json())
            .then(data => setCompletedTask(data))
    },[])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `https://true-loonie-30043.herokuapp.com/new_task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remain = completedTask.filter(task => task._id !== id);
                setCompletedTask(remain);
                toast.success('Deleted This Task')
            })
        }
    }
    

    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50 my-5">
                <div className="divider"><h2 className='text-xl font-semibold'>Completed Task</h2></div>
                <div className='my-3'>
                    {
                        completedTask.map(singleCompletedTask => <AllCompletedTask
                             key={singleCompletedTask._id}
                             singleCompletedTask={singleCompletedTask}
                             handleDelete={handleDelete}
                             ></AllCompletedTask>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CompletedTask;