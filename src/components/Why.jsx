import React from 'react'
import { Link } from 'react-router-dom'

function Why({ data }) {
    return (
        <>
            <section id="why" class="services-area pt-110 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center pb-25">
                                <h3 class="title">Why You Should Choose AI Netra</h3>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data ?
                                data.map(item =>
                                    <div class="col-lg-3 col-sm-6" key={item.id}>
                                        <div class={`single-services ${item.cls} text-center mt-30 wow fadeInUpBig`} data-wow-duration="1.3s" data-wow-delay="0.2s">
                                            <div class="services-icon d-flex align-items-center justify-content-center">
                                                <i class={item.icon}></i>
                                            </div>
                                            <div class="services-content">
                                                <h4 class="services-title"><Link to="/">{item.title}</Link></h4>
                                                <p class="text">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : 'loading'}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Why
