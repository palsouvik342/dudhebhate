import React from 'react'
import BreadCrump from './aboutComponents/BreadCrumb'
import Footer from './Footer'
import Blogs from './homeComponents/Blogs'

const OurBlog = () => {
  return (
    <>
        <BreadCrump title="Our Activity" />
        <Blogs/>
        <Footer/>
    </>
  )
}

export default OurBlog