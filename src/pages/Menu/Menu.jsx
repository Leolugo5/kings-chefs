import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { MenuItem } from '../../components/MenuDisplayCards/MenuItem'
import { Menu_breakfast } from '../../DB/Menu_Breakfast'
import { Menu_lunch } from '../../DB/Menu_Lunch'
import './Menu.scss'
import { Menu_salads } from '../../DB/Menu_salads'
import { Menu_kids } from '../../DB/Menu_kids'
import { Menu_dessert } from '../../DB/Menu_dessert'

function Menu() {

    const [cateType, setCateType] = useState(Menu_breakfast)

    const [Mb, setMb] = useState(true);
    const [Ml, setMl] = useState(false);
    const [Ms, setMs] = useState(false);
    const [Mk, setMk] = useState(false);
    const [Md, setMd] = useState(false);



    return (
        <div className='main-menu-page'>
            <NavBar />
            <div className="main-container">
                <div className="hero-section">
                    <h1>Menu</h1>
                </div>
                <div className="content">
                    <div className="menu-selector">
                        <ul className="menu-option-list">
                            <li className="menu-type-item" onClick={() => {
                                setCateType(Menu_breakfast)
                                setMb(true)
                                setMl(false)
                                setMs(false)
                                setMk(false)
                                setMd(false)
                            }}
                                style={{
                                    color: Mb ? '#e0a73b' : '#282828',
                                    boxShadow: Mb ? '0px 3px 0px 0px rgba(0, 0, 0, 0.68)' : null
                                }}
                            >
                                Breakfast
                            </li>
                            <li className="menu-type-item" onClick={() => {
                                setCateType(Menu_lunch)
                                setMb(false)
                                setMl(true)
                                setMs(false)
                                setMk(false)
                                setMd(false)
                            }}
                                style={{
                                    color: Ml ? '#e0a73b' : '#282828',
                                    boxShadow: Ml ? '0px 3px 0px 0px rgba(0, 0, 0, 0.68)' : null
                                }}
                            >
                                Lunch and Dinner
                            </li>
                            <li className="menu-type-item" onClick={() => {
                                setCateType(Menu_salads)
                                setMb(false)
                                setMl(false)
                                setMs(true)
                                setMk(false)
                                setMd(false)
                            }}
                                style={{
                                    color: Ms ? '#e0a73b' : '#282828',
                                    boxShadow: Ms ? '0px 3px 0px 0px rgba(0, 0, 0, 0.68)' : null
                                }}
                            >
                                Salads
                            </li>
                            <li className="menu-type-item" onClick={() => {
                                setCateType(Menu_kids)
                                setMb(false)
                                setMl(false)
                                setMs(false)
                                setMk(true)
                                setMd(false)
                            }}
                                style={{
                                    color: Mk ? '#e0a73b' : '#282828',
                                    boxShadow: Mk ? '0px 3px 0px 0px rgba(0, 0, 0, 0.68)' : null
                                }}
                            >
                                Kids
                            </li>
                            <li className="menu-type-item" onClick={() => {
                                setCateType(Menu_dessert)
                                setMb(false)
                                setMl(false)
                                setMs(false)
                                setMk(false)
                                setMd(true)
                            }}
                                style={{
                                    color: Md ? '#e0a73b' : '#282828',
                                    boxShadow: Md ? '0px 3px 0px 0px rgba(0, 0, 0, 0.68)' : null
                                }}
                            >
                                Dessert
                            </li>
                        </ul>
                    </div>
                    <div className="dish-list-container">
                        <div className="dish-list">
                            {
                                cateType.map((cat, i) => {
                                    return < MenuItem cat={cat} key={i} />

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu