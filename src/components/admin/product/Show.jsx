import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { adminToken, apiUrl } from '../../common/http';

const Show = () => {

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  
    const fetchProducts = async () => {
          setLoader(true);
          const res = await fetch(`${apiUrl}/products`, {
              method: 'GET',
              headers: {
                  'Content-type' : 'application/json',
                  'Accept' : 'application/json',
                  'Authorization' : `Bearer ${adminToken()}`
              }
          }).then(res => res.json())
          .then(result => {
              setLoader(false);
             if(result.status == 200) {
              console.log(result.data);
                  setProducts(result.data);
             } else {
              console.log('something went wrong');
             }
          })
  }

  useEffect(() => {
          fetchProducts()
      },[])
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-between align-items-center mt-5 pb-3'>
          <h4 className='h4 pb-0 mb-0'>Products</h4>
          <Link className="btn btn-primary" to="/admin/products">Back</Link>
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

export default Show