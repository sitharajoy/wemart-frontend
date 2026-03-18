import React from 'react'
import { assets, shoppingList } from '../../public/assets/js/assets'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const ShopCard = () => {
  return (
      <>
          {shoppingList.map((items) => (
              <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                      <div className="card rounded-0">
                          <img className="card-img rounded-0 img-fluid" src={items.image} />
                          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                              <ul className="list-unstyled">
                                  <li><Link className="btn btn-success text-white" to={'/shop-single'}><i className="far fa-heart"></i></Link></li>
                                  <li><Link className="btn btn-success text-white mt-2" to={'/shop-single'}><i className="far fa-eye"></i></Link></li>
                                  <li><Link className="btn btn-success text-white mt-2" to={'/shop-single'}><i className="fas fa-cart-plus"></i></Link></li>
                              </ul>
                          </div>
                      </div>
                      <div className="card-body">
                          <Link to={'/shop-single'} className="h3 text-decoration-none">{items.name}</Link>
                          <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                              <li>{items.availableSize}</li>
                              <li className="pt-2">
                                  {items.avilableColors.map((color) => (
                                      <span className={`product-color-dot color-dot-${color} float-left rounded-circle ml-1`}> 0 </span>
                                  ))}

                              </li>
                          </ul>
                          <ul className="list-unstyled d-flex justify-content-center mb-1">
                              <li>
                                  <StarRating rating={items.rating} />

                              </li>
                          </ul>
                          <p className="text-center mb-0">${items.price}</p>
                      </div>
                  </div>
              </div>
          ))}

      </>

  )
}

export default ShopCard