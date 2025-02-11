import React from 'react';
import '../Assets/Footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer text-light">
            <div className="row  container mx-auto">
                {/* Contact Section */}
                <div className="col-md-6 col-lg-3 footer_col">
                    <div className="footer_contact">
                        <h4>Reach at..</h4>
                        <div className="contact_link_box">
                            <p>
                                <a href="#">
                                    <i className="fas fa-map-marker-alt me-2" aria-hidden="true"></i>
                                    <span>Location</span>
                                </a>
                            </p>
                            <p>
                                <a href="tel:+011234567890">
                                    <i className="fas fa-phone me-2" aria-hidden="true"></i>
                                    <span>Call +01 1234567890</span>
                                </a>
                            </p>
                            <p>
                                <a href="mailto:demo@gmail.com">
                                    <i className="fas fa-envelope me-2" aria-hidden="true"></i>
                                    <span>demo@gmail.com</span>
                                </a>
                            </p>
                        </div>

                    </div>
                    <div className="footer_social">
                        <a href="#" aria-label="Facebook ms-3">
                            <i className="fab fa-facebook-f me-3" aria-hidden="true"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fab fa-twitter me-3 " aria-hidden="true"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in me-3" aria-hidden="true"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fab fa-instagram me-3" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {/* About Section */}
                <div className="col-md-6 col-lg-3 footer_col">
                    <div className="footer_detail">
                        <h4>About</h4>
                        <p >
                            Beatae provident nobis mollitia magnam voluptatum, unde dicta facilis minima veniam corporis laudantium alias tenetur eveniet illum reprehenderit fugit a delectus officiis blanditiis ea.
                        </p>
                    </div>
                </div>

                {/* Links Section */}
                <div className="col-md-6 col-lg-2 mx-auto footer_col">
                    <div className="footer_link_box">
                        <h4>Links</h4>
                        <div className="footer_links lin">
                            <p className='fs-5'><a className="active me-3" href="index.html">Home</a> <a href="about.html">About</a></p>
                            <p className='fs-5' ><a href="departments.html">Departments</a></p>
                            <p className='fs-5 '><a href="doctors.html" className='me-4'>Doctors</a><a href="contact.html">Contact Us</a></p>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="col-md-6 col-lg-3 footer_col">
                    <h4>Newsletter</h4>
                    <form>
                        <input type="email" placeholder="Enter email" aria-label="Email Address"  className='form-control p-2'/><br></br>
                        <button type="submit" className='form-control p-3 text-light' style={{backgroundColor:'#61D1A1',border:'none'}}>Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Footer Info */}
            <div className="footer-info mt-4">
                <p className='m-0 text-center info'>
                    &copy; {currentYear} All Rights Reserved By
                    <a href="https://html.design/"> Free Html Templates</a><br /><br></br>
                    &copy; {currentYear} Distributed By
                    <a href="https://themewagon.com/"> ThemeWagon</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
