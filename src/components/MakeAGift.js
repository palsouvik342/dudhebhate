import React, { useState } from 'react'
import BreadCrump from './aboutComponents/BreadCrumb'
import AlertMessage from './AlertMessage';
import Footer from './Footer'

const MakeAGift = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [purpose, setPurpose] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [showMessage, setshowMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    let data = {};
    const handleGiftFormSubmit = (e) => {
        e.preventDefault();
        data = {name, email, whatsapp, purpose, comment, address}
        console.log(data)
        if(name === "" | email === "" | whatsapp === "" | purpose === "" | address === ""){
            setMessageType('warning');
            setshowMessage('Please Fill all the necessary * fields');
            return;
        }
        setName("");
        setEmail("");
        setWhatsapp("");
        setPurpose("");
        setComment("");
        setAddress("");
        setMessageType('success');
        setshowMessage('Thank You! Thank you very much for your help.');
    }

  return (
    <>
    <BreadCrump title="Make a Gift" />
    <section className="make_a_gift_section">
        <div className="container">
            <div className="make_a_gift_box">
                <div className="message">
                    <AlertMessage showMessage={showMessage} messageType={messageType} />
                </div>
                <form method='post' onSubmit={handleGiftFormSubmit}>
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
                                <input type="text" name="whatsapp" className='w-100' placeholder='Whatsapp Number*' value={whatsapp} onChange={(e) => setWhatsapp(e.target.value) } />
                            </div>
                        </div> 
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="purpose" className='w-100' placeholder='Purpose*' value={purpose} onChange={(e) => setPurpose(e.target.value) } />
                            </div>
                        </div> 
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" name='address' placeholder='Your Address*' className='w-100' value={address} onChange={(e) => setAddress(e.target.value) } />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea placeholder='Comment...' name='comment' className='w-100' rows="7" value={comment} onChange={(e) => setComment(e.target.value) }></textarea>
                            </div>
                        </div> 
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="upi_imps d-flex justify-content-center my-3 ">
                                    <img src="/uploads/upi.png" alt="upi" />
                                    <img src="/uploads/imps.png" alt="imps" />
                                </div>
                                <div className="pay-now d-flex justify-content-center">
                                    <button type='submit' className='pay-now-btn'>Pay now</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </form>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default MakeAGift