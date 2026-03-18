import React from 'react'
import { Link } from 'react-router-dom'

const Sample = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-between align-items-center mt-5 pb-3'>
          <h4 className='h4 pb-0 mb-0'>Categories</h4>
          <Link className="btn btn-primary" to=""></Link>
        </div>
        <div className='col-md-3'>
        <Sidebar/>
        </div>
         <div className='col-md-9'>
         <div className='card shadow'>
            <div className='card-body p-4'>


            </div>

         </div>
          
         </div>
      </div>
       
    </div>
  )
}

export default Sample