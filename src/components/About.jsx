import React from 'react'

export default function About({ data }) {
    return (
        <>
            <section id="about" class="about-area pt-70 pb-120">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                <div class="about-shape"></div>
                                <img class="app" src={data ? data.image : 'loading'} alt="app" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                <div class="section-title">
                                    <h3 class="title">{data ? data.title : 'loading'}</h3>
                                    <p class="text">{data ? data.desp : 'loading'}</p>
                                </div>
                                <a href="https://github.com/ShivamKumarSah/AI-Netra/raw/main/app-debug.apk" class="main-btn">Get The App</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
