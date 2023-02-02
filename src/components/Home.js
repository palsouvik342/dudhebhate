import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import AboutSection from './homeComponents/AboutSection';
import CounterSection from './homeComponents/CounterSection';
import MissionVisionGoals from './homeComponents/MissionVisionGoals';
import OurTeam from './homeComponents/OurTeam';
import SingleTestimonialOwlItem from './homeComponents/SingleTestimonialOwlItem';
import ClientsLogo from './homeComponents/ClientsLogo';
import Blogs from './homeComponents/Blogs';
import Footer from './Footer';

const Home = () => {
  return (
    <>
        <section className="carousel_section">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../uploads/slider1.jpg" className="d-block w-100" alt="..." />
                        <div className="slider_img_text">
                            <h1>Hand to Make Better Life for <span>Children</span></h1>
                            <p>Every good act is humanity. A man's true wealth hereafter is the good that he does in this world to his fellows.</p>
                            <div className="slider_buttons d-flex justify-content-center">
                                <Link to="/contact" className='custom-btn btn-contact-us'>Contact Now</Link>
                                <Link to="/our-story" className='custom-btn btn-about-us'>About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../uploads/slider2.jpg" className="d-block w-100" alt="..." />
                        <div className="slider_img_text">
                            <h1>Hand to Make Better Life for <span>Children</span></h1>
                            <p>Every good act is humanity. A man's true wealth hereafter is the good that he does in this world to his fellows.</p>
                            <div className="slider_buttons d-flex justify-content-center">
                                <button className='custom-btn btn-contact-us'>Contact Now</button>
                                <button className='custom-btn btn-about-us'>About Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../uploads/slider3.jpg" className="d-block w-100" alt="..." />
                        <div className="slider_img_text">
                            <h1>Hand to Make Better Life for <span>Children</span></h1>
                            <p>Every good act is humanity. A man's true wealth hereafter is the good that he does in this world to his fellows.</p>
                            <div className="slider_buttons d-flex justify-content-center">
                                <button className='custom-btn btn-contact-us'>Contact Now</button>
                                <button className='custom-btn btn-about-us'>About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        
        <section className='welcome_section'>
            <div className="container">
                <h1>mission, vision & <span>goals</span></h1>
                <p className='section_tagline'>We are humanity/ non-profit/ fundraising/ NGO organizations. Our humanity activities are taken place around the world,let contribute to them with us by your hand to be a better life.</p>
                <div className="row">
                    <MissionVisionGoals image="/uploads/mission.jpg" altText="MissionImage" icon="/uploads/mission.png" iconAltText="MissionIcon" title="Support Peoples" caption="Be Good to People" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, quasi. Repellat velit libero numquam et error esse, totam molestias quos eaque omnis sit non nulla neque optio iste in dicta." />

                    <MissionVisionGoals image="/uploads/vision.jpg" altText="visionImage" icon="/uploads/vision.png" iconAltText="VisionIcon" title="Support Peoples" caption="Be Good to People" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, quasi. Repellat velit libero numquam et error esse, totam molestias quos eaque omnis sit non nulla neque optio iste in dicta." />
                    
                    <MissionVisionGoals image="/uploads/goals.jpg" altText="GoalsImage" icon="/uploads/goals.png" iconAltText="GoalsIcon" title="Support Peoples" caption="Be Good to People" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, quasi. Repellat velit libero numquam et error esse, totam molestias quos eaque omnis sit non nulla neque optio iste in dicta." />
                </div>
            </div>
        </section>

        <AboutSection/>
        <OurTeam/>
 
        <section className='counter_section' style={{backgroundImage:"url('/uploads/counter_bg.jpg')"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="counter_left">
                            <h2>Join With Us</h2>
                            <h1>BECOME A PROUD member</h1>
                            <p>When you bring together those who have, with those who have not - miracles happen.Become a time hero by volunteering with us. Meet new friends, gain new skills, get happiness and have fun!</p>
                            <Link className="custom-btn btn-join-us text-decoration-none">
                                Join Us
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <CounterSection cunterImage="/uploads/icons8-user-100.png" counterNumber="347" counterText="Team members" />
                            
                            <CounterSection cunterImage="/uploads/icons8-star-half-empty-100.png" counterNumber="45+" counterText="Winning Awards" />
                            
                            <CounterSection cunterImage="/uploads/icons8-handshake-heart-100.png" counterNumber="30+" counterText="Years Experience" />

                            <CounterSection cunterImage="/uploads/icons8-happy-100.png" counterNumber="2000" counterText="Projects Done" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonial_section">
            <div className="container">
                <h1>Words from <span>People</span></h1>
                <p className='section_tagline'>Dreams and teams work together.</p>
                <div className="testimonial_slider">
                    <OwlCarousel items={1} className="owl-theme" loop margin={8} >  
                        <SingleTestimonialOwlItem testimonialImage="/uploads/testi-logo.png" testimonialName="John Doe" testimonialDesignation="Web developer" testimonialFeedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vitae similique consequatur expedita doloremque obcaecati, saepe nesciunt, consectetur minima iusto quidem nulla eaque. Fugit ducimus mollitia incidunt vero harum suscipit corporis, voluptatum qui excepturi consectetur inventore est sunt reiciendis error necessitatibus animi, dolorum in odio voluptatem alias laudantium facere. Quos tempore laudantium ipsum culpa, omnis molestias neque cupiditate obcaecati est" />
                        
                        <SingleTestimonialOwlItem testimonialImage="/uploads/testi-logo.png" testimonialName="Doe John" testimonialDesignation="Web developer" testimonialFeedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vitae similique consequatur expedita doloremque obcaecati, saepe nesciunt, consectetur minima iusto quidem nulla eaque. Fugit ducimus mollitia incidunt vero harum suscipit corporis, voluptatum qui excepturi consectetur inventore est sunt reiciendis error necessitatibus animi, dolorum in odio voluptatem alias laudantium facere. Quos tempore laudantium ipsum culpa, omnis molestias neque cupiditate obcaecati est" />
                    </OwlCarousel> 
                </div>
            </div>
        </section>

        <ClientsLogo/>

        <Blogs/>

        <Footer/>

    </>
  )
}

export default Home