import React from 'react';
import AboutOurWork from './aboutComponents/AboutOurWork';
import BreadCrumb from './aboutComponents/BreadCrumb';
import Footer from './Footer';
import AboutSection from './homeComponents/AboutSection';
import ClientsLogo from './homeComponents/ClientsLogo';
import OurTeam from './homeComponents/OurTeam';

const AboutUs = () => {
  return (
    <div className="about-us">
      <BreadCrumb title="Our Story"/>
      <AboutSection/>
      <AboutOurWork/>
      <OurTeam background="#f9f9f9"/>
      <ClientsLogo/>
      <Footer/>
    </div>

  )
}

export default AboutUs