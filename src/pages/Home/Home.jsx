import React from 'react'
import { MainButtonComponent } from '../../components/Buttons/MainButtonComponent/MainButtonComponent'
import FeaturedMenuItems from '../../components/FeaturedMenuItems/FeaturedMenuItems'
import Footer from '../../components/Footer/Footer'
import HowItWorks from '../../components/How-Works/HowItWorks'
import NavBar from '../../components/NavBar/NavBar'
import Packs from '../../components/Packs/Packs'
import WhyUs from '../../components/WhyUs/WhyUs'
import './Home.scss'

const Home = () => {
    return (
        <div id='main_home' className="home-page wrapper">

            <NavBar />
            <div className='home'>
                <section className="header">
                    <div className="top-wrapper">
                        <div className="title">
                            <h1>
                                King's  chefs
                            </h1>
                        </div>
                        <div className="sub-title">
                            <h2>
                                Masters in the kitchen
                            </h2>
                        </div>
                    </div>
                    <div className="top-body">
                        <div id="line-top"></div>
                        <div id="line-right"></div>
                        <div className="top-body-wrapper">
                            <div className="top-body-title">
                                <h2 className="title">
                                    Let us cook
                                </h2>
                                <h2 className="title">for <span className='top-body-title-span'>You.</span></h2>
                            </div>
                            <div className="top-body-content">
                                <p className="top-body-content-p">
                                    With a personalized catered to your needs... Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis distinctio impedit aliquid, facilis possimus modi at voluptatem error dolores!
                                </p>
                                <MainButtonComponent />
                            </div>
                        </div>
                        <div id="line-bottom"></div>
                        <div id="line-left"></div>
                    </div>
                </section>
            </div>
            <FeaturedMenuItems />
            <Packs />
            <HowItWorks />
            <WhyUs />
            <Footer />
        </div>
    )
}

export default Home