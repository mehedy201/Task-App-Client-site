import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdTitle } from 'react-icons/md';
import { TbFileDescription } from 'react-icons/tb';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './SingleTask.css'
import { toast } from 'react-toastify';


const SingleTask = ({singleTask}) => {


    const {_id, taskName, taskTitle} = singleTask;

    // Use React hooks form  --------------
    const { register, formState: { errors }, handleSubmit, reset, control } = useForm();
    const onSubmit = data =>{

        const url = `https://true-loonie-30043.herokuapp.com/new_task/${_id}`
        
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                console.log(data);
                toast('Completed Task')
                reset();
            }
                
        })
    };
    return (
        <>
            {
                !taskTitle && 
                <div className="collapse">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium flex items-center">
                        <h1 className="text-xl p-2">{taskName} </h1>
                        <AiOutlinePlusCircle/>
                    </div>
                
                    <div className="collapse-content"> 
                       <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="form-control w-full">
                             {/* ------------------ Name Field ------------------ */}
                              <div className='flex items-center my-4'>
                                   <MdTitle className="text-2xl mr-2"/>
                                   <input 
                                      type="text" 
                                      name='taskTitle'
                                      placeholder="Please type your Task Title" 
                                      className="input w-full"
                                      {...register("taskTitle", { required: true })} 
                                      />
                              </div>
                              {/* ------------------ Date Picker --------------------- */}
                               <div className='flex items-center my-4'>
                               <AiOutlineCalendar className="text-2xl mr-2"/>
                               <Controller
                                   control={control}
                                   name="dateInput"
                                   className="z-10	"
                                   render={({ field }) => (
                                     <DatePicker
                                       placeholderText="Select Your Date"
                                       onChange={(date) => field.onChange(date)}
                                       selected={field.value}
                                       
                                     />
                                   )}
                               />
                               </div>
                                   {errors.dateInput && <span>This field is required</span>}
                               <div className='flex items-center my-4'>
                                   <TbFileDescription className="text-2xl mr-2"/>
                                   <textarea 
                                     type="text" 
                                     name='taskDes'
                                     placeholder="Please type your Task Description" 
                                     className="input w-full"
                                     {...register("taskDes", { required: true })} 
                                     />
                               </div>

                              <label className="label">
                                 {errors.email?.type === 'name' && <span className="text-red-500">{errors.name.message}</span> }
                              </label> 
                             

                              {/* ------------------ Submit Button ------------------ */}
                              <input className="btn btn-sm capitalize" type="submit" value={'Completed Task'}/>
                         </div>
                     </form>
                </div>
           </div>
        }
        </>
    );
};

export default SingleTask;