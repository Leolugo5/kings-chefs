import React from 'react'
import { MainButtonComponent } from '../Buttons/MainButtonComponent/MainButtonComponent'
import './PackCard.scss'


function Pack_card({ pack, i }) {
    return (
        <div className='Pack_card_wrapper'>
            <div className="card-wrapper" id={i}>
                <div className="card-img">
                    <img loading='lazy' src={pack.img} alt="description of packege" />
                </div>
                <div className="description-wrapper">
                    <div className="card-top">
                        <h3 className="title">
                            {pack.name}
                        </h3>
                    </div>
                    <div className="bottom">
                        <div className="packege-desc">
                            {pack.breakfast ?
                                <div className="breackfast-wrapper dish-li-container">
                                    <span className='breackfast dish-span-title'>
                                        Breackfast
                                    </span>
                                    {pack.breakfast}
                                </div>
                                : null
                            }
                            {pack.snacks ?
                                <div className="dish-li-container">
                                    <span className='breackfast dish-span-title'>
                                        Break
                                    </span>
                                    {pack.snacks}
                                </div>
                                : null
                            }
                            {pack.drinks ?
                                <div className="dish-li-container">
                                    <span className='breackfast dish-span-title'>
                                        Break
                                    </span>
                                    {pack.drinks}
                                </div>
                                : null
                            }
                            {pack.lunch ?
                                <div className="lunch-wrapper dish-li-container">
                                    <br />
                                    <span className='lunch dish-span-title'>
                                        Lunch
                                    </span>
                                    {pack.lunch}
                                </div>
                                : null
                            }


                            {pack.two_meal ?
                                <div className="lunch-wrapper dish-li-container">
                                    <br />
                                    <span className='dish-span-title'>
                                        OR
                                    </span>
                                </div>
                                : null
                            }

                            <br />

                            {pack.diner ?
                                <div className="diner-wrapper dish-li-container">
                                    <span className='diner dish-span-title'>
                                        Diner
                                    </span>
                                    {pack.diner}
                                </div>
                                : null
                            }

                            {pack.kings_buffet ?
                                <div className="diner-wrapper dish-li-container">
                                    <br />
                                    <span className='diner dish-span-title'>
                                        King's experience
                                    </span>
                                    {pack.kings_buffet}
                                </div>
                                : null
                            }
                            {pack.kings_buffet_extra_content ?
                                <div className="diner-wrapper dish-li-container">
                                    <br />
                                    {pack.kings_buffet_extra_content}
                                    <br />
                                </div>
                                : null
                            }

                        </div>
                        <div className="about-this-packege">
                            <span className="label dish-span-title">
                                Description
                            </span>
                            <span className="description">
                                {pack.description}
                            </span>
                        </div>

                        <div className="to-action-btn">
                            <div className="action-container">
                                <div className="book-now btn-wrap">
                                    <MainButtonComponent />
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