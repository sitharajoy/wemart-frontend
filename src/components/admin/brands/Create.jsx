import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { useForm } from 'react-hook-form';
import { adminToken, apiUrl } from '../../common/http';
import { toast } from 'react-toastify';

const Create = () => {

  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const Navigate = useNavigate();
  const saveBrand = async (data) => {
        setDisable(true);
         const res = await fetch(`${apiUrl}/brands`, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'authorization' : `Bearer ${adminToken()}`
                },
                body:JSON.stringify(data)
            }).then(res => res.json())
            .then(result => {
                setDisable(false);
               if(result.status == 200) {
                    toast.success(result.message);
                    Navigate('/admin/brands');
               } else {
                console.log('something went wrong');
               }
            })
    }

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-between align-items-center mt-5 pb-3'>
          <h4 className='h4 pb-0 mb-0'>Brands / Create</h4>
          <Link className="btn btn-primary" to="/admin/brands">Back</Link>
        </div>
        <div className='col-md-3'>
        <Sidebar/>
        </div>
         <div className='col-md-9'>
         <div className='card shadow'>
            <div className='card-body p-4'>
              <form onSubmit={handleSubmit(saveBrand)}>
                <div className='card shadow'>
                    <div className='card-body p-4'>
                      <div className='mb-3'>
                            <label className='form-label'>Name</label>
                            <input {...register('name',{
                                required : 'The name field is required'
                            })} type='text' className={`form-control ${errors.name && 'is-invalid'}`} placeholder='Name'/>
                             {errors.name && <p className='invalid-feedback'>{errors.name?.message}</p>}
                      </div>

                       <div className='mb-3'>
                            <label className='form-label'>Status</label>
                            <select className={`form-control ${errors.status && 'is-invalid'}`} {...register('status',{
                                required : 'The status field is required'
                            })}>
                                <option value=''>Select a status</option>
                                <option value='1'>Active</option>
                                <option value='0'>Inactive</option>
                            </select>
                           {errors.status && <p className='invalid-feedback'>{errors.status?.message}</p>}
                        </div>
                    </div>
                </div>
                  <button type='submit' className='btn btn-primary mt-3' disabled={disable}>Create</button>
              </form>

            </div>

         </div>
          
         </div>
      </div>
       
    </div>
  )
}

export default Create