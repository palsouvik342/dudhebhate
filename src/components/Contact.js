import { useState } from 'react'
import { Link } from 'react-router-dom'
import BreadCrump from './aboutComponents/BreadCrumb'
import AlertMessage from './AlertMessage'
import Footer from './Footer'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [showMessage, setshowMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    // let data ={};
    const handleContactSubmit = (e) => {
        e.preventDefault();
        if(name === "" | email === "" | phone === "" | subject === ""){
            setMessageType('warning');
            setshowMessage('Please Fill all the necessary * fields');
            return;
        }
        // data = {name, email, phone, subject, message}
        // console.log(data);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setMessageType('success');
        setshowMessage('Thank you for contacting us. We will get in touch shortly');
    }
  return (
    <>
    <BreadCrump title="Contact Us" />
    <section className='contact_section'>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="send-message">
                        <h3>SEND YOUR <span>MESSAGE</span></h3>
                        <div className="contact-form my-4">
                            <div className="message">
                                <AlertMessage showMessage={showMessage} messageType={messageType} />
                            </div>
                            <form action="" onSubmit={handleContactSubmit}>
                                <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className='w-100' placeholder='Your Name*' value={name} onChange={(e) => setName(e.target.value) } />
                                        </div>
                                    </div> 
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className='w-100' placeholder='Your Email*' value={email} onChange={(e) => setEmail(e.target.value) } />
                                        </div>
                                    </div> 
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="phone" className='w-100' placeholder='Phone*' value={phone} onChange={(e) => setPhone(e.target.value) } />
                                        </div>
                                    </div> 
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className='w-100' placeholder='Subject*' value={subject} onChange={(e) => setSubject(e.target.value) } />
                                        </div>
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea placeholder='Your Message...' className='w-100' rows="7" value={message} onChange={(e) => setMessage(e.target.value) } ></textarea>
                                        </div>
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type='submit' className='form-submit-btn'>submit</button>
                                        </div>
                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="quick_contact">
                        <h3>Quick <span>CONTACT</span></h3>
                        <div className="quick_contact_box my-4">
                            <div className="footer-common">
                                <div className="footer-contact-list">
                                    <ul>
                                        <li><i className="fas fa-location-arrow"> </i><span>Address:</span> Park Drive, Varick Street, New York, NY 10012, USA</li>
                                        <li><hr/></li>
                                        <li><i className="fas fa-phone"></i> <span>Phone:</span> <Link to="tel:1234567890">1234567890</Link></li>
                                        <li><hr/></li>
                                        <li><i className="fas fa-envelope"></i> <span>Email:</span> <Link to="mailto:admin@admin.com">admin@admin.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact