import React from 'react';
import SingleTeamMember from './SingleTeamMember';

const OurTeam = (props) => {
  return (
    <section className="our_team_section" style={{backgroundColor:props.background}}>
        <div className="container">
            <h1>our <span>team</span></h1>
            <p className='section_tagline'>We are humanity/ non-profit/ fundraising/ NGO organizations. Our humanity activities are taken place around the world,let contribute to them with us by your hand to be a better life.</p>
            <div className="row">
                <SingleTeamMember memberImage="/uploads/img_avatar.png" memberImageAlt="Team Member 1" memberName="Member Name 1" memberDesignation="CEO & Co-founder" facebook="https://www.facebook.com/" instagram="https://www.instagram.com/" twitter="https://twitter.com/home" />
                
                <SingleTeamMember memberImage="/uploads/img_avatar.png" memberImageAlt="Team Member 2" memberName="Member Name 2" memberDesignation="CEO & Co-founder" facebook="https://www.facebook.com/" instagram="https://www.instagram.com/" twitter="https://twitter.com/home" />
                
                <SingleTeamMember memberImage="/uploads/img_avatar.png" memberImageAlt="Team Member 3" memberName="Member Name 3" memberDesignation="CEO & Co-founder" facebook="https://www.facebook.com/" instagram="https://www.instagram.com/" twitter="https://twitter.com/home" />

                <SingleTeamMember memberImage="/uploads/img_avatar.png" memberImageAlt="Team Member 4" memberName="Member Name 4" memberDesignation="CEO & Co-founder" facebook="https://www.facebook.com/" instagram="https://www.instagram.com/" twitter="https://twitter.com/home" />
            </div>
        </div>
    </section>
  )
}

export default OurTeam