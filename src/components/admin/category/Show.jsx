import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { adminToken, apiUrl } from '../../common/http'
import Loader from '../../common/Loader'
import NoState from '../../common/NoState'
import { toast } from 'react-toastify'

const Show = () => {
    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchCategories = async () => {
        setLoader(true);
        const res = await fetch(`${apiUrl}/categories`, {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'authorization' : `Bearer ${adminToken()}`
            }
        }).then(res => res.json())
        .then(result => {
            setLoader(false);
           if(result.status == 200) {
                setCategories(result.data);
           } else {
            console.log('something went wrong');
           }
        })
    }

    const deleteCategory = async (id) => {

        if(confirm("Are you sure you want to delete?")) {
                const res = await fetch(`${apiUrl}/categories/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type' : 'application/json',
                        'Accept' : 'application/json',
                        'authorization' : `Bearer ${adminToken()}`
                    }
                }).then(res => res.json())
                .then(result => {
                if(result.status == 200) {
                      const newCategories = categories.filter(category => category.id != id);
                      setCategories(newCategories);
                      toast.success(result.message);
                } else {
                    console.log('something went wrong');
                }
            })
        }
               
    }

    useEffect(() => {
        fetchCategories()
    },[])

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-between align-items-center mt-5 pb-3'>
          <h4 className='h4 pb-0 mb-0'>Categories</h4>
            <Link className="btn btn-primary float-end" to="/admin/categories/create">Create</Link>
          
        </div>
        <div className='col-md-3'>
        <Sidebar/>
        </div>
         <div className='col-md-9'>
         <div className='card shadow'>
            <div className='card-body p-4'>
                   {loader == true && <Loader/>} 
                   {loader == false && categories.length == 0 && <NoState text="Categories Not Found"/>}
                   {categories.length > 0 && 
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th width="20">Id</th>
                                    <th  width="100">Name</th>
                                    <th width="50">Status</th>
                                    <th width="50">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(category => {
                                        return (
                                            <tr>
                                                <td>{category.id}</td>
                                                <td>{category.name}</td>
                                                <td>
                                                    {category.status ==1 ?  <span className='badge text-bg-success'>Active</span> :  <span className='badge text-bg-danger'>Inactive</span>}
                                                </td>
                                                        <td><Link to={`/admin/categories/edit/${category.id}`}
                                                        className='text-primary'><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16">
                                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10L3 14l.146-2.854 10-10zM11.207 2L4 9.207V12h2.793L14 4.793 11.207 2z" />
                                                        </svg></Link>
                                                        <Link onClick={() => deleteCategory(category.id)} className='text-danger ms-2'>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm4 0A.5.5 0 0 1 10 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
                                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2H5l1-1h4l1 1h2.5a1 1 0 0 1 1 1zM4 4v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4H4z" />
                                                                </svg></Link></td>
                                            </tr>
                                        )
                                    })
                                }
                            
                            </tbody>
                        </table>
                    }
            </div>

         </div>
          
         </div>
      </div>
       
    </div>
  )
}

export default Show