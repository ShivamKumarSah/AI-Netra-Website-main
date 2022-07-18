import React from 'react'

export default function Features({ data }) {
    return (
        <>
            <section id="features" class="features-area pt-110">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center pb-25">
                                <h3 class="title">{data ? data.title : 'loading'}</h3>
                                <p class="text">{data ? data.desc : 'loading'}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="features-items">
                                {
                                    data ?
                                        data.FeaturesBox.map(item =>
                                            <div key={item.id} class={`single-features ${item.cls} d-sm-flex mt-30 wow fadeInUpBig`} data-wow-duration="1.3s" data-wow-delay="0.2s">
                                                <div class="features-icon d-flex justify-content-center align-items-center">
                                                    <i class={item.icons}></i>
                                                </div>
                                                <div class="features-content media-body">
                                                    <h4 class="features-title">{item.title}</h4>
                                                    <p class="text">{item.body}</p>
                                                </div>
                                            </div>
                                        ) : 'load'
                                }
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="features-image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                <img class="image" src={data ? data.image : 'loading'} alt="App" />
                                <div class="features-shape-1"></div>
                                <div class="features-shape-2">
                                    <img class="svg" src={data ? data.shape2 : 'loading'} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
