import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Sidebar from '../Sidebar';
import { useForm } from 'react-hook-form';
import { adminToken, apiUrl } from '../../common/http';

const Edit = () => {
    const [disable, setDisable] = useState(false);
    const [category, setCategory] = useState([]);
    const params = useParams();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({defaultValues: async () => {
            const res = await fetch(`${apiUrl}/categories/${params.id}`, {
                            method: 'GET',
                            headers: {
                                'Content-type' : 'application/json',
                                'Accept' : 'application/json',
                                'Authorization' : `Bearer ${adminToken()}`
                            }
                            
                        }).then(res => res.json())
                        .then(result => {
                            console.log(result.data);
                        if(result.status == 200) {
                              setCategory(result.data)
                              reset({
                                name: result.data.name,
                                status: result.data.status,
                              })
                        } else {
                            console.log('something went wrong');
                        }
                        })
    }
});
    const Navigate = useNavigate();

    const editCategory = async (data) => {
        setDisable(true);
         const res = await fetch(`${apiUrl}/categories/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'authorization' : `Bearer ${adminToken()}`
                },
                body:JSON.stringify(data)
            }).then(res => res.json(data))
            .then(result => {
                setDisable(false);
               if(result.status == 200) {
                    toast.success(result.message);
                    Navigate('/admin/categories');
               } else {
                console.log('something went wrong');
               }
            })
    }

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-between align-items-center mt-5 pb-3'>
          <h4 className='h4 pb-0 mb-0'>Categories / Edit</h4>
          <Link className="btn btn-primary" to="/admin/categories">Back</Link>
        </div>
        <div className='col-md-3'>
        <Sidebar/>
        </div>
         <div className='col-md-9'>
            <form onSubmit={handleSubmit(editCategory)}>
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
                    <button type='submit' className='btn btn-primary mt-3' disabled={disable}>Update</button>
                </form>  
          
         </div>
      </div>
       
    </div>
  )
}

export default Edit