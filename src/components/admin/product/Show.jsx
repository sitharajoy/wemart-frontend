import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { adminToken, apiUrl } from '../../common/http';
import Loader from '../../common/Loader';
import NoState from '../../common/NoState';

const Show = () => {

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProducts = async () => {
    setLoader(true);
    const res = await fetch(`${apiUrl}/products`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${adminToken()}`
      }
    }).then(res => res.json())
      .then(result => {
        setLoader(false);
        if (result.status == 200) {
          console.log(result.data);
          setProducts(result.data);
        } else {
          console.log('something went wrong');
        }
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-between align-items-center mt-5 pb-3'>
          <h4 className='h4 pb-0 mb-0'>Products</h4>
          <Link className="btn btn-primary" to="/admin/products/create">Create</Link>
        </div>
        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <div className='card shadow'>
            <div className='card-body p-4'>
              {loader == true && <Loader />}
              {loader == false && products.length == 0 && <NoState text="Products Not Found" />}
              {products.length > 0 &&
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th width="20">Id</th>
                      <th width="20">Image</th>
                      <th width="100">Title</th>
                      <th width="50">Price</th>
                      <th width="50">Qty</th>
                      <th width="50">Sku</th>
                      <th width="50">Status</th>
                      <th width="50">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => {
                      return (
                        <tr>
                          <td>{product.id}</td>
                          <td>{(product.image_url == "") ? <img src="https://placehold.co/50x50" /> : <img src={product.image_url} alt="" width="50" />} </td>
                          <td>{product.title}</td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td>{product.sku}</td>
                          <td>
                            {product.status == 1 ? <span className='badge text-bg-success'>Active</span> : <span className='badge text-bg-danger'>Inactive</span>}
                          </td>
                          <td><Link to={`/admin/products/edit/${product.id}`}
                            className='text-primary'><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 16 16">
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10L3 14l.146-2.854 10-10zM11.207 2L4 9.207V12h2.793L14 4.793 11.207 2z" />
                            </svg></Link>

                            <Link className='text-danger ms-2'>
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