import React from 'react'
import './HowItWorks.scss'

function HowItWorks() {
    return (
        <div className='How-it-works wd-100 new-section-border'>
            <div className="main-wrapper wd-100 max-wid-1100 margin-auto">
                <div className="container-wrapper">
                    <div className="title-wrapper margin-auto">
                        <div className=" text-capi title margin-auto">
                            <h1 className='text-center text-color-2'>
                                Here's how it works
                            </h1>
                            <h4 className='sub-title text-center padding-t-2r text-color-2 ft-w400'>
                                Follow three simple steps and we will provide you with the services of a private chef.
                            </h4>
                        </div>
                    </div>
                    <div className="constent-section">
                        <section className="content-wrapper">
                            <div className="content">
                                <div className="get-services">
                                    <ul className="steps-wrapper display-flex padding-2r">
                                        <li className="item-step wd-100">
                                            <div className="item-wrapper wd-100">
                                                <h5 className="title">
                                                    Step 1
                                                </h5>
                                                <p>
                                                    Pick your favorite pack and select dish from menu
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item-step ft-s-08re">
                                            <div className='item-wrapper'>
                                                <h5>
                                                    Step 2
                                                </h5>
                                                <p>
                                                    Get in touch by booking dates and packege selected
                                                    Send us an email, call us or send us a WhatsApp message.
                                                </p>
                                                <p>
                                                    We will get back to you as soon as possible
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item-step ft-s-08re">
                                            <div className='item-wrapper'>
                                                <h5>
                                                    Step 3
                                                </h5>
                                                <p>
                                                    Pay a deposit and enjoy eating like a king!
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks