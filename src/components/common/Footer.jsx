import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    {/* Start Footer */}
    <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo">WeMart Shop</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            123 Consectetur at ligula 10660
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <Link className="text-decoration-none" to="tel:010-020-0340">010-020-0340</Link>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <Link className="text-decoration-none" to="mailto:info@company.com">info@company.com</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><Link className="text-decoration-none" to="#">Luxury</Link></li>
                        <li><Link className="text-decoration-none" to="#">Sport Wear</Link></li>
                        <li><Link className="text-decoration-none" to="#">Men's Shoes</Link></li>
                        <li><Link className="text-decoration-none" to="#">Women's Shoes</Link></li>
                        <li><Link className="text-decoration-none" to="#">Popular Dress</Link></li>
                        <li><Link className="text-decoration-none" to="#">Gym Accessories</Link></li>
                        <li><Link className="text-decoration-none" to="#">Sport Shoes</Link></li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><Link className="text-decoration-none" to="#">Home</Link></li>
                        <li><Link className="text-decoration-none" to="#">About Us</Link></li>
                        <li><Link className="text-decoration-none" to="#">Shop Locations</Link></li>
                        <li><Link className="text-decoration-none" to="#">FAQs</Link></li>
                        <li><Link className="text-decoration-none" to="#">Contact</Link></li>
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <Link className="text-light text-decoration-none" target="_blank" to="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></Link>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <Link className="text-light text-decoration-none" target="_blank" to="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></Link>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <Link className="text-light text-decoration-none" target="_blank" to="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></Link>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <Link className="text-light text-decoration-none" target="_blank" to="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-auto">
                    <label className="sr-only" for="subscribeEmail">Email address</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address"/>
                        <div className="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="text-left text-light">
                            Copyright &copy; 2026 WeMart 
                            | Designed by <Link rel="sponsored" to="/" target="_blank">WeMart</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    {/* End Footer */}
    </div>
  )
}

export default Footer