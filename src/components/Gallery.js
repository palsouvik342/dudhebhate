import React from 'react';
import BreadCrump from './aboutComponents/BreadCrumb';
import Footer from './Footer';
import SingleGallery from './galleryComponent/SingleGallery';

const Gallery = () => {
  return (
    <div className="our_gallery">
        <BreadCrump title="Our Gallery" />
        <section className="our_gallery_section">
            <div className="container">
                <div className="row">
                    <SingleGallery imageURL="/uploads/mission.jpg" imageCaption="Gallery Image 1" imageAltText="Gallery 1" />
                    <SingleGallery imageURL="/uploads/vision.jpg" imageCaption="Gallery Image 2" imageAltText="Gallery 1" />
                    <SingleGallery imageURL="/uploads/goals.jpg" imageCaption="Gallery Image 3" imageAltText="Gallery 1" />
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Gallery