import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrump from '../aboutComponents/BreadCrumb'
import Footer from "../Footer";

export const BlogDetails = () => {
  return (
    <>
        <BreadCrump title="Blog Details" />
        
        <section className='blog_details'>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="single-blog-post">
                            <div className="single-blog-figure">
                                <img src="/uploads/slider1.jpg" alt="Blog Details" className='w-100' />
                            </div>
                            <div className="single-blog-content">
                                <h3 className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam.</h3>
                                <div className="blog-meta d-flex">
                                    <p className='m-0'><i className="far fa-user"></i>by admin</p>
                                    <p className='m-0'><i className="far fa-calendar-alt"></i> 20 Dec, 2022</p>
                                </div>
                                <blockquote>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia alias, magnam totam, a voluptas dolore aperiam suscipit quaerat excepturi repudiandae saepe mollitia optio sed ea enim incidunt quasi harum animi. Dolores animi perferendis iusto est, ut voluptatem reprehenderit fuga fugit vero odit reiciendis veritatis quasi officia esse quam non id expedita vitae nemo obcaecati asperiores doloribus ad porro necessitatibus? Aliquid velit natus fugit obcaecati optio quam non quidem, porro modi voluptas, pariatur laborum tempore eos error vel dolorum. Earum ratione iste commodi aliquam quidem fugit accusamus pariatur placeat natus illum! Voluptates, enim fuga! Consectetur, laboriosam fugiat accusamus architecto sunt pariatur corporis eum reiciendis eaque praesentium, fuga quibusdam, repellat ullam voluptatum illo? Error nostrum officia eum consectetur, explicabo est totam quibusdam quam velit fugit tenetur, voluptatibus et saepe nemo perspiciatis accusamus. Eum sit minus repellendus temporibus, aspernatur quas perferendis accusamus doloribus eos, adipisci assumenda saepe exercitationem sint fuga! Neque a sint consequatur architecto cum ipsam minus ex temporibus enim numquam officia, harum praesentium doloremque sit? Fugiat veniam amet architecto cum necessitatibus similique animi incidunt unde cupiditate laborum corrupti quisquam dicta, excepturi sapiente, at ex. Ut asperiores maxime dicta repellendus est velit ipsum quas, nisi laborum. Minima est nisi illo iure maiores esse atque voluptatum dolor asperiores praesentium fuga error aliquid perspiciatis dolorum sit dolore, accusamus officiis veritatis possimus corrupti perferendis unde. Impedit aperiam non eum ut dignissimos id ullam, esse iusto obcaecati culpa explicabo fugiat magnam neque nisi quidem porro illo praesentium iure similique pariatur modi odio? Mollitia, odio qui laudantium optio deleniti rem harum inventore cupiditate magni facere fugit sequi quaerat ex, numquam dicta odit. Repellat sunt assumenda ea facilis atque ducimus. Quia accusamus, qui ullam, alias nemo omnis quam nam asperiores sed molestiae debitis numquam. Ratione officiis nisi similique facere, praesentium pariatur laudantium delectus, ipsa voluptas aliquid eius repellat? Quis impedit animi asperiores assumenda pariatur porro optio? Quisquam natus doloremque magni mollitia enim aspernatur ipsa velit consectetur placeat commodi, neque voluptate, deleniti doloribus vel a aliquam alias! Corrupti consectetur fuga impedit neque eos exercitationem vel non, itaque, earum perferendis culpa, voluptas iusto porro. Rem sequi iure pariatur aperiam quae, architecto incidunt cupiditate cum quisquam, voluptatem blanditiis sed velit! Delectus qui quibusdam ex pariatur quos sapiente ipsum vel temporibus quia repellendus quo rem incidunt nam, doloribus possimus suscipit repudiandae sit architecto at et recusandae libero officiis eveniet tenetur? Eaque sunt dignissimos obcaecati reprehenderit ipsam amet sint expedita beatae veniam voluptatem quisquam natus earum modi neque maxime, recusandae, incidunt corrupti, eligendi temporibus tempora nemo nesciunt. Perferendis autem ratione odio maiores. Possimus, sapiente qui, porro incidunt expedita quam asperiores dolorum explicabo odio sed autem aliquam quas sit? Quis velit quo sequi ullam quasi porro, similique molestiae aliquam aperiam voluptatum amet nisi! Laboriosam expedita enim iste, voluptates eius illo, ut error itaque impedit excepturi eaque officia quisquam adipisci quod, dolorum exercitationem sequi ipsam? Accusantium, atque! Consequuntur corrupti tenetur ab nesciunt? Impedit repellat sapiente commodi, soluta ratione rerum consequuntur assumenda odio iste. Animi quo fugit blanditiis sed consectetur mollitia ut natus quae adipisci aut?
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className='latest-post'>latest posts</h3>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/uploads/mission.jpg" alt="Blog1" className='w-100' />
                            </div>
                            <div className="col-md-8">
                                <div className="latest-single-post">
                                    <Link to="/activity/1"><p>{"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur ".slice(0,40)+"..."}</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/uploads/mission.jpg" alt="Blog1" className='w-100' />
                            </div>
                            <div className="col-md-8">
                                <div className="latest-single-post">
                                    <Link to="/activity/1"><p>{"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur ".slice(0,40)+"..."}</p></Link>
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
