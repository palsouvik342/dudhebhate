import React from 'react'

const SingleClientLogoOwlItem = (props) => {
  return (
    <div className='item'>
        <img src={props.clientLogo} alt={props.clientLogoAlt} />
    </div>
  )
}

export default SingleClientLogoOwlItem