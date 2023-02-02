import React from 'react';
import { Link } from 'react-router-dom';

const SingleTeamMember = (props) => {
  return (
    <article className="col-md-3">
        <div className="single-team-member">
            <figure className="img-box">
                <div className="overlay"></div>
                <div className="inner-box">
                    <ul className="social">
                        <li><Link to={props.facebook}><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link to={props.twitter}><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to={props.instagram}><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                </div>
                <img src={props.memberImage} alt={props.memberImageAlt} className='w-100 rounded-circle' />
            </figure>
            <div className="author-info center">
                <h4>{props.memberName}</h4>
                <p>{props.memberDesignation}</p>
            </div>
        </div>
    </article> 
    // <div className="col-md-3">
    //     <div className="single_member">
    //         <img src={props.memberImage} alt={props.memberImageAlt} className='w-100' />
    //         <div className="team-overlay">
    //             <div className="member_name">
    //                 <h4>{props.memberName}</h4>
    //             </div>
    //             <div className="member_social_links">
    //                 <ul>
    //                     <li><a href={props.facebook}><i className="fab fa-facebook-f"></i></a></li>
    //                     <li><a href={props.twitter}><i className="fab fa-twitter"></i></a></li>
    //                     <li><a href={props.instagram}><i className="fab fa-instagram"></i></a></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default SingleTeamMember