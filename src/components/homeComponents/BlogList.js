import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = (props) => {
  return (
    <div className="col-md-4">
        <div className="single-blog">
            <div className="single-blog-figure">
                <img src={props.blogImage} alt="Blog1" className='w-100' />
            </div>
            <div className="single-blog-details">
                <div className="blog-meta d-flex justify-content-evenly">
                    <p className='m-0'><i className="far fa-user"></i>by admin</p>
                    <p className='m-0'><i className="far fa-calendar-alt"></i> 20 Dec, 2022</p>
                </div>
                <h3><Link to="/activity/1">{props.blogTitle}</Link></h3>
                <p>{props.blogBody}</p>
                <div className="read-more">
                    <Link to="/activity/1" className='custom-btn btn-read-more'>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogList