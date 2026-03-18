import React from 'react'
import { assets } from '../../public/assets/js/assets'
import CategoriesList from '../components/CategoriesList'
import { Link } from 'react-router-dom'
import ShopCard from '../components/ShopCard'

const Shop = () => {
  return (
    <div>
         {/* Start Content */}
    <div className="container py-5">
        <div className="row">

            <CategoriesList />

            <div className="col-lg-9">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-inline shop-top-menu pb-3 pt-1">
                            <li className="list-inline-item">
                                <Link className="h3 text-dark text-decoration-none mr-3" to="#">All</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="h3 text-dark text-decoration-none mr-3" to="#">Men's</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="h3 text-dark text-decoration-none" to="#">Women's</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="d-flex">
                            <select className="form-control">
                                <option>Featured</option>
                                <option>A to Z</option>
                                <option>Item</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ShopCard />
                </div>

                <div div="row">
                    <ul className="pagination pagination-lg justify-content-end">
                        <li className="page-item disabled">
                            <Link className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" to="#" tabindex="-1">1</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" to="#">2</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" to="#">3</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    {/* End Content */}

    {/* Start Brands */}
    <section className="bg-light py-5">
        <div className="container my-4">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Our Brands</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="col-lg-9 m-auto tempaltemo-carousel">
                    <div className="row d-flex flex-row">
                        {/* Controls*/}
                        <div className="col-1 align-self-center">
                            <Link className="h1" to="#multi-item-example" role="button" data-bs-slide="prev">
                                <i className="text-light fas fa-chevron-left"></i>
                            </Link>
                        </div>
                        {/* End Controls*/}

                        {/* Carousel Wrapper*/}
                        <div className="col">
                            <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                                {/* Slides*/}
                                <div className="carousel-inner product-links-wap" role="listbox">

                                    {/* First slide*/}
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand1} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand2} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand3} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand4} alt="Brand Logo"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End First slide*/}
                                    {/*Second slide*/}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand1} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand2} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand3} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand4} alt="Brand Logo"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Second slide*/}

                                    {/*Third slide*/}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand1} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand2} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand3} alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="#"><img className="img-fluid brand-img" src={assets.brand4} alt="Brand Logo"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Third slide*/}

                                </div>
                                {/* -End Slides*/}
                            </div>
                        </div>
                        {/* End Carousel Wrapper*/}

                        {/* Controls*/}
                        <div className="col-1 align-self-center">
                            <Link className="h1" to="#multi-item-example" role="button" data-bs-slide="next">
                                <i className="text-light fas fa-chevron-right"></i>
                            </Link>
                        </div>
                        {/* End Controls*/}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End Brands */}
    </div>
  )
}

export default Shop