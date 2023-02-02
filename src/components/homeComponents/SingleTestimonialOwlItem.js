import React from 'react'

const SingleOwlItem = (props) => {
  return (
    <div className="item">
        <div className="feedback-img d-flex justify-content-center">
            <img src={props.testimonialImage} alt="Feedback" className='img-fluid'/>
        </div>
        <p className='feedback text-center'>{props.testimonialFeedback}</p>
        <h2 className='testi_name text-center'>{props.testimonialName}</h2>
        <p className='designation text-center'>{props.testimonialDesignation}</p>
    </div>
  )
}

export default SingleOwlItem