import React from 'react'
// import { Link } from 'react-router-dom'

export default function Download({ data }) {
    return (
        <>
            <section id="download" class="download-area pt-70 pb-40">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-6 col-md-9">
                            <div class="download-image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                <img class="qr" src={data ? data.image : "loading"} alt="download" />

                                <div class="download-shape-1"></div>
                                <div class="download-shape-2">
                                    <img class="svg" src="assets/images/download-shape.svg" alt="shape" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="download-content mt-45 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                <h3 class="download-title">{data ? data.title : 'loading'}</h3>
                                <ul class="d-flex">
                                    <li>
                                        <a href="https://github.com/ShivamKumarSah/AI-Netra/raw/main/app-debug.apk" class="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.8s">Download App</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
