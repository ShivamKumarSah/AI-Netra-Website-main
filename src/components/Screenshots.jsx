import React from 'react'

export default function Screenshots({ data }) {
    return (
        <>
            <section id="screenshots" class="screenshots-area pt-110 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center pb-45">
                                <h3 class="title">{data ? data.title : 'loading'}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="screenshot-slider">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">

                                        {
                                            data ? data.slider.map(item =>
                                                <div class="swiper-slide">
                                                    <div class="slider-image" key={item.id}>
                                                        <img src={item.sliderimg} alt="screenshot" />
                                                    </div>
                                                </div>
                                            ) : 'loading'
                                        }
                                    </div>

                                    <div class="swiper-pagination"></div>
                                    <div class="screenshot-frame d-none d-sm-block">
                                        <img src="assets/images/app-frame.png" alt="frame" />
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
