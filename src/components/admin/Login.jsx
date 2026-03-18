import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useForm } from "react-hook-form";
import { apiUrl } from '../common/http';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AdminAuthContext } from '../context/adminAuth';


const Login = () => {
    const {login} = useContext(AdminAuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate =useNavigate();

    const onSubmit = async (data) => {
    
        const res = await fetch(`${apiUrl}/admin/login`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(result => {
            console.log(result)

            if(result.status == 200) {
                const adminInfo = {
                    token : result.token,
                    id: result.id,
                    name: result.name
                }
                localStorage.setItem('adminInfo',JSON.stringify(adminInfo))
                login(adminInfo)
                navigate('/admin/dashboard')
                
            } else {
                toast.error(result.message)
            }
        })
    }

  return (
    <div className='container d-flex justify-content-center py-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='card card-body p-4 login'>
            <h3>Admin Login</h3>
            <div className='mb-3'>
                <label htmlFor='' className='form-label' >Email</label>
                <input 
                 {...register("email", {
                    required: "The email field is required.",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email"
                    }
                })}
                type='text' className={`form-control ${errors.email && 'is-invalid'}`} placeholder='Email'/>
                {errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>}
            </div>

             <div className='mb-3'>
                <label htmlFor='' className='form-label' >Password</label>
                <input 
                {
                    ...register("password",{required : "The password field is required."})
                }
                type='password' className={`form-control ${errors.password && 'is-invalid'}`} placeholder='Password'/>
                {errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>}
            </div>

            <button className='btn btn-secondary'>Login</button>

        </div>
        </form>
    </div>
  )
}

export default Login