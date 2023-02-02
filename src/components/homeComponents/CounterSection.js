import React from 'react'

const CounterSection = (props) => {
  return (
    <div className="col-md-6">
        <div className="single-counter">
            <div className="row">
                <div className="col-md-4">
                    <div className="counter-image">
                        <img src={props.cunterImage} alt="User Icon" className='w-100' />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="counter-text">
                        <h2>{props.counterNumber}</h2>
                        <h4>{props.counterText}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CounterSection