import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <section className="topbar_Section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="make-a-gift d-flex align-items-center">
                            <Link to="/make-a-gift" className='custom-btn make_gift_btn'>Make a gift</Link>
                            <p>No One Has Ever Become Poor By Giving!</p>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="topbar_links">
                            <ul>
                                <li><Link to="tel:1234567890"><i className="fas fa-phone"></i> 1234567890 </Link></li>
                                <li>
                                    <Link to="mailto:admin@admin.com"><i className="fas fa-envelope"></i> admin@admin.com </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar