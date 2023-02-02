import React from 'react'
import BreadCrump from './aboutComponents/BreadCrumb'
import Footer from './Footer'
import OurTeam from './homeComponents/OurTeam'

const Team = () => {
  return (
    <>
      <BreadCrump title="Our Team" />
      <OurTeam />
      <Footer/>
    </>
  )
}

export default Team