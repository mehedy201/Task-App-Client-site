import React, { useRef } from 'react';

const NewTask = () => {


    const taskNameRef = useRef('')

    const handleSubmit = event => {
        event.preventDefault();
        const taskName = taskNameRef.current.value;
        console.log(taskName);
    }



    return (
        <div className='h-100'>
            <div className="flex flex-col w-full border-opacity-50 my-5">
                <div className="divider"><h2 className='text-xl font-semibold'>New Task</h2></div>
            </div>
            <div className='flex justify-center mb-5'>
                <div className='border p-5 rounded md: w-6/12'>
                    <h3 className="text-xl">Please type your task name</h3>
                    <p className='mb-4'>If you write task name then press Enter key and go To-Do page and complete task</p>
                    <form onSubmit={handleSubmit}>
                        <input ref={taskNameRef} type="text" placeholder="Type task name" className="input w-full input-bordered" />
                        <button id='buttonId' type='submit' className='btn btn-sm mt-2 float-right'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewTask;