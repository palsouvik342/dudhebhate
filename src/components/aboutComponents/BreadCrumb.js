import React from 'react'

const BreadCrump = (props) => {
  return (
    <section className='breadcrumb-section' style={{backgroundImage:"url('/uploads/breadcrump.jpg')"}}>
        <div className="container-fluid">
          <h2>{props.title}</h2>
        </div>
    </section>
  )
}

export default BreadCrump