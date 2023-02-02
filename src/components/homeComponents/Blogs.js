import React from 'react'
import BlogList from './BlogList'

const Blogs = () => {
  return (
    <section className="blogs_section">
        <div className="container">
            <h1>Our <span>Activity</span></h1>
            <p className='section_tagline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloremque.</p>
            <div className="row">
                <BlogList blogImage="/uploads/slider1.jpg" blogTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit." blogBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis reiciendis dolore placeat fugiat eum veritatis impedit ipsum, aperiam fugit." />
                
                <BlogList blogImage="/uploads/slider1.jpg" blogTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit." blogBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis reiciendis dolore placeat fugiat eum veritatis impedit ipsum, aperiam fugit." />
                
                <BlogList blogImage="/uploads/slider1.jpg" blogTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit." blogBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis reiciendis dolore placeat fugiat eum veritatis impedit ipsum, aperiam fugit." />
            </div>
        </div>
    </section>
  )
}

export default Blogs