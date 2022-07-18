import React from 'react'

export default function Testimonial({ data }) {
    return (
        <>
            <section id="testimonial" class="testimonial-area pt-110 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center pb-45">
                                <h3 class="title">{data ? data.title : "loading"}</h3>
                                <p class="text">{data ? data.desc : "loading"}</p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="grid">
                            <div class="card">
                                <div class="card_img">
                                    <img src="assets/images/author-1.jpg" alt="" />
                                </div>
                                <div class="card_body">
                                    <h2 class="card_title">Shubham Kumar Sah</h2>
                                    <p class="designation">Hello there, I am working as a Backend Developer and Content Writer on this project, I have done research, and worked on Slide, and Documentation.<br /><br />I believe in finding new ideas and creating new things.</p>
                                    <div class="call_btn">
                                        <a href="https://www.linkedin.com/in/shubham-kumar-sah-/" class="btn_icon">
                                            <i class="lni lni-linkedin-original"></i>
                                            <span class="circle"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card_img">
                                    <img src="assets/images/author-2.jpg" alt="" />
                                </div>
                                <div class="card_body">
                                    <h2 class="card_title">Shivam Kumar Sah</h2>
                                    <p class="designation">Hi there, I am on this project as a front-end, and backend developer, who made this beautiful and functional mobile application and  websites.<br /> I am a self-taught developer, and I am always looking for new ways to improve my skills.</p>
                                    <div class="call_btn">
                                        <a href="https://www.linkedin.com/in/shivam-sah/" class="btn_icon">
                                            <i class="lni lni-linkedin-original"></i>
                                            <span class="circle"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card_img">
                                    <img src="assets/images/author-3.jpg" alt="" />
                                </div>
                                <div class="card_body">
                                    <h2 class="card_title">Sonali Singh</h2>
                                    <p class="designation">Hi, I am on this project as a graphic designer, I worked on documentation and also helped my collegeues to make this website and mobile application.<br /><br />I love to work with team and i am alway ready to help them.</p>
                                    <div class="call_btn">
                                        <a href="https://www.instagram.com/sonali__singh22/" class="btn_icon">
                                            <i class="lni lni-instagram-filled"></i>
                                            <span class="circle"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}