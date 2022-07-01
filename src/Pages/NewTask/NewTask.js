import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const NewTask = () => {



    // Use React hooks form  --------------
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        
        fetch('https://true-loonie-30043.herokuapp.com/new_task',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.success){
                toast('Go To-Do Page')
                reset();
            }
                
        })
    };

    



    return (
        <div className='h-100'>
            <div className="flex flex-col w-full border-opacity-50 my-5">
                <div className="divider"><h2 className='text-xl font-bold'>New Task</h2></div>
            </div>
            <div className='flex justify-center mb-5'>
                <div className='border p-5 rounded md: w-6/12'>
                    <h3 className="text-xl font-semibold">Please type your task name</h3>
                    <p className='mb-4'>If you write task name then press Enter key and go To-Do page and complete task</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-control w-full">
                              {/* ------------------ Name Field ------------------ */}
                               <input 
                                  type="text" 
                                  name='taskName'
                                  placeholder="Please type your Task Name" 
                                  className="input input-bordered w-full"
                                  {...register("taskName", { required: true })} 
                                  />
                               <label className="label">
                                  {errors.email?.type === 'name' && <span className="text-red-500">{errors.name.message}</span> }
                               </label> 
                              

                               {/* ------------------ Submit Button ------------------ */}
                               <input className="btn btn-sm float-right" type="submit" value={'Add'}/>
                          </div>
                      </form>
                </div>
            </div>
        </div>
    );
};

export default NewTask;