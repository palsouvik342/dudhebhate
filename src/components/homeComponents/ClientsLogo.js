import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import SingleClientLogoOwlItem from './SingleClientLogoOwlItem';

const ClientsLogo = () => {
  const options = {
      margin: 8,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 5,

          }
      },
  };
  return (
    <section className="clients_logo">
        <div className="container">
            <OwlCarousel {...options} className="owl-theme" >  
                <SingleClientLogoOwlItem clientLogo="/uploads/client_logo.jpg" clientLogoAlt="Client Logo" />
                <SingleClientLogoOwlItem clientLogo="/uploads/client_logo.jpg" clientLogoAlt="Client Logo" />
                <SingleClientLogoOwlItem clientLogo="/uploads/client_logo.jpg" clientLogoAlt="Client Logo" />
                <SingleClientLogoOwlItem clientLogo="/uploads/client_logo.jpg" clientLogoAlt="Client Logo" />
                <SingleClientLogoOwlItem clientLogo="/uploads/client_logo.jpg" clientLogoAlt="Client Logo" />
            </OwlCarousel> 
        </div>
    </section>
  )
}

export default ClientsLogo