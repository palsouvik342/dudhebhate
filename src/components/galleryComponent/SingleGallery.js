import React from 'react'
// import { Link } from 'react-router-dom'

const SingleGallery = (props) => {
  return (
    <div className="col-md-4">
        <a href={props.imageURL} data-fancybox="gallery" data-caption={props.imageCaption} >
            <div className="single-galary">
                <img src={props.imageURL} alt={props.imageAltText} className='w-100' />
                <div className="gallery_img_abs">
                    <i className="fas fa-search-plus"></i>
                </div>
            </div>
        </a>
    </div>
  )
}

export default SingleGallery