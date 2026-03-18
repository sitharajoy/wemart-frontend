import React from 'react'
import TopHeader from '../components/common/TopHeader'
import Header from '../components/common/Header'
import Search from '../components/common/Search'
import Hero from '../components/Hero'
import Footer from '../components/common/Footer'
import { Link } from 'react-router-dom'
import { assets } from '../../public/assets/js/assets'

const Home = () => {
  return (
    <>

    <Hero />

    {/* Start Categories of The Month */}
    <section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Categories of The Month</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
                <Link to={'/shop'}><img src={assets.categoryImg1} className="rounded-circle img-fluid border"/></Link>
                <h5 className="text-center mt-3 mb-3">Watches</h5>
                <p className="text-center"><Link className="btn btn-success" to={'/shop'}>Go Shop</Link></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <Link to={'/shop'}><img src={assets.categoryImg2} className="rounded-circle img-fluid border"/></Link>
                <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                <p className="text-center"><Link className="btn btn-success" to={'/shop'}>Go Shop</Link></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <Link to={'/shop'}><img src={assets.categoryImg3} className="rounded-circle img-fluid border"/></Link>
                <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                <p className="text-center"><Link className="btn btn-success" to={'/shop'}>Go Shop</Link></p>
            </div>
        </div>
    </section>
    {/* End Categories of The Month */}


    {/* Start Featured Product */}
    <section className="bg-light">
        <div className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Featured Product</h1>
                    <p>
                        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <Link to={'/shop-single'}>
                            <img src={assets.featureProd1} className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$240.00</li>
                            </ul>
                            <Link to={'/shop-single'} className="h2 text-decoration-none text-dark">Gym Weight</Link>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </p>
                            <p className="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <Link to={'/shop-single'}>
                            <img src={assets.featureProd2} className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$480.00</li>
                            </ul>
                            <Link to={'/shop-single'} className="h2 text-decoration-none text-dark">Cloud Nike Shoes</Link>
                            <p className="card-text">
                                Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                            </p>
                            <p className="text-muted">Reviews (48)</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <Link to={'/shop-single'}>
                            <img src={assets.featureProd3} className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$360.00</li>
                            </ul>
                            <Link to={'/shop-single'} className="h2 text-decoration-none text-dark">Summer Addides Shoes</Link>
                            <p className="card-text">
                                Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                            </p>
                            <p className="text-muted">Reviews (74)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End Featured Product */}
    </>
  )
}

export default Home