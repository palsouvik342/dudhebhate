import React from 'react'

const MissionVisionGoals = (props) => {
  return (
    <div className='col-md-4'>
        <img src={props.image} alt={props.altText} className="w-100" />
        <div className="single-mvg">
            <div className='row'>
                <div className="col-md-3">
                    <img src={props.icon} alt={props.iconAltText} className="w-100" />
                </div>
                <div className="col-md-9">
                    <h4>{props.title}</h4>
                    <p className='color'>{props.caption}</p>
                </div>
            </div>
            <div className="row">
                <p className='pt-2 m-0'>{props.content}</p>
            </div>
        </div>
    </div>
  )
}

export default MissionVisionGoals