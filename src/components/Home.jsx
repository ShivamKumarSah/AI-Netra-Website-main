import React from 'react'
import { Link } from 'react-router-dom'

function Home({ data }) {
    return (
        <>
            <div id="home" class="header-hero bg_cover d-lg-flex align-items-center">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="shape shape-4"></div>
                <div class="shape shape-5"></div>
                <div class="shape shape-6"></div>
                <div class="container">
                    <div class="row align-items-center justify-content-center justify-content-lg-between">
                        <div class="col-lg-6 col-md-10">
                            <div class="header-hero-content">
                                <h3 class="header-title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                    <span>{data ? data.short_ttl : 'loading...'}</span> {data ? data.title : 'loading...'}</h3>
                                <p class="text wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s">{data ? data.desp : 'loading...'}</p>
                                <ul class="d-flex">
                                    <li>
                                        <a href="https://github.com/ShivamKumarSah/AI-Netra/raw/main/app-debug.apk" class="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.8s">Download App</a></li>
                                    <li>
                                        <Link to="https://www.youtube.com/watch?v=HZcZ1yh8bUk" class="header-video video-popup wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="1.2s"><i class="lni lni-play"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-10">
                            <div class="header-image">
                                <img src={data ? data.image : 'loading'} alt="app" class="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s" />
                                <div class="image-shape wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                    <img src={data ? data.shape1 : 'loading'} alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-shape-1 d-none d-md-block"></div>
                <div class="header-shape-2">
                    <img src={data ? data.shape2 : 'loading'} alt="shape" />
                </div>
            </div>
        </>
    )
}

export default Home
