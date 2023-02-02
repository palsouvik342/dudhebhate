import React from 'react'

const AboutSection = () => {
  return (
    <section className="about_Section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="/uploads/slider1.jpg" alt="About" className="w-100" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="home_about">
                        <h2>About our <span>humanity</span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cupiditate optio tempore voluptas natus in repellat eveniet exercitationem nesciunt quam earum laborum qui dolore, commodi illo illum quos recusandae fuga laudantium alias voluptatum nihil quaerat. Enim eius voluptatibus maiores beatae, cupiditate necessitatibus, quam laboriosam reiciendis culpa fugiat deserunt tenetur magnam facilis ratione fuga non ullam soluta, esse ipsum? Est, et.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection