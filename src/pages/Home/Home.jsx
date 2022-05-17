import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Packs from '../../components/Packs/Packs'
import WhyUs from '../../components/WhyUs/WhyUs'
import './Home.scss'

const Home = () => {
    return (
        <div className="home-page wrapper">

            <NavBar />
            <div className='home'>
                <section className="header">
                    <div className="top-wrapper">
                        <div className="title">
                            <h1>
                                Get a private chef for your vacational rental
                            </h1>
                        </div>
                        <div className="sub-title">
                            <h2>
                                Enjoy the best private chef services
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
            <Packs />
            <WhyUs />
        </div>
    )
}

export default Home