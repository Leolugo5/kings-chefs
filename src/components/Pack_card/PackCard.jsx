import React from 'react'
import './PackCard.scss'


function Pack_card({ pack, i }) {
    return (
        <div className='Pack_card_wrapper'>
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={pack.img} alt="description of packege" />
                </div>
                <div className="description-wrapper">
                    <div className="card-top">
                        <h3 className="title">
                            {pack.name}
                        </h3>
                    </div>
                    <div className="bottom">
                        <div className="packege-desc">
                            <div className="breackfast-wrapper dish-li-container">
                                <span className='breackfast dish-span-title'>
                                    Breackfast
                                </span>
                                {pack.breakfast}
                            </div>
                            <div className="lunch-wrapper dish-li-container">
                                <span className='lunch dish-span-title'>
                                    Lunch
                                </span>
                                {pack.lunch}
                            </div>
                            <div className="diner-wrapper dish-li-container">
                                <span className='diner dish-span-title'>
                                    Diner
                                </span>
                                {pack.diner}
                            </div>
                        </div>
                        <div className="about-this-packege">
                            {pack.description}
                            <br />
                            <br />
                        </div>

                        <div className="to-action-btn">
                            <div className="action-container">
                                <div className="book-now btn-wrap">
                                    <a href="https://www.instagram.com/hermitcooking4us/">Book Now</a>
                                </div>
                                <div className="build-your-own btn-wrap">
                                    <a href="https://www.instagram.com/hermitcooking4us/">See Menu</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pack_card