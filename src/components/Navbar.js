import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // Sticky Navbar Start
    const [fix, setFix] = useState('');
    const setFixed = ()=>{
        if(window.scrollY >= (window.innerHeight)/2){
            setFix('sticky');
        } else{
            setFix('');
        }
    }
    window.addEventListener("scroll",setFixed);
    // Sticky Navbar End
    return (
        <section className="navbar_section">
            <div className="container-fluid">
                <nav className={`navbar navbar-expand-lg bg-body-tertiary ${fix}`}>
                    <div className="container">
                        <Link className="navbar-brand" to="/">Dudhebhate</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/our-story">Our Story</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/team">Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/activity">Activity List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>   
        </section>
    )
}

export default Navbar