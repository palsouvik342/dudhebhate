import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="footer_section">
        <div className="upper-footer">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center upper-footer-text">
                    <h4 className='text-white'>Join Our Mission to Improve a Child's Feature, Pet's Life and Our Planet.</h4>
                    <Link to="/contact" className="custom-btn btn-footer-contact">Contact Now</Link>
                </div>
            </div>
        </div>
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/">
                            <img src="/uploads/logo.png" alt="Footer Logo" className='w-100' />
                        </Link>
                        <div className="footer-common">
                            <p className='about_footer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis officia, tempore maiores mollitia dolorum debitis asperiores consectetur autem illo sapiente accusamus.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4 className='text-center'>Get in touch</h4>
                        <div className="footer-common">
                            <div className="footer-contact-list">
                                <ul>
                                    <li><i className="fas fa-location-arrow"> </i><strong>Address:</strong> Park Drive, Varick Street, New York, NY 10012, USA</li>
                                    <li><i className="fas fa-phone"></i> <strong>Phone:</strong> <Link to="tel:1234567890">1234567890</Link></li>
                                    <li><i className="fas fa-envelope"></i> <strong>Email:</strong> <Link to="mailto:admin@admin.com">admin@admin.com</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4 className='text-center'>Useful Links</h4>
                        <div className="footer-common">
                            <ul className='useful_links'>
                                <li><Link to="/our-story">About</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/activity">Blogs</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4 className='text-center'>Find in Map</h4>
                        <div className="footer-common">
                            <iframe title='google_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3571783639545!2d88.4649499150394!3d22.603133485167017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027544e22a5b6f%3A0xf22acb90ceebe765!2sEco%20Park!5e0!3m2!1sen!2sin!4v1673551957138!5m2!1sen!2sin"  height="150" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="bottom-footer py-3 d-flex align-items-center justify-content-center">
            <p className='m-0'><span>Copyrights &copy; {new Date().getFullYear()}</span> All Rights Reserved by Dudhebhate | Powered by <span>DEM Webs India</span></p>
        </div>
    </section>
  )
}

export default Footer