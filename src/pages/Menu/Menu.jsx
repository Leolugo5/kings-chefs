import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { MenuItem } from '../../components/MenuDisplayCards/MenuItem'
import { Menu_breakfast } from '../../DB/Menu_Breakfast'
import { Menu_lunch } from '../../DB/Menu_Lunch'
import { Menu_salad } from '../../DB/Menu_salad'
import './Menu.scss'

function Menu() {

    const [cateType, setCateType] = useState(Menu_breakfast)

    return (
        <div className='main-menu-page'>
            <NavBar />
            <div className="main-container">
                <div className="hero-section">
                    <h1>Hola menu</h1>
                </div>
                <div className="content">
                    <div className="menu-selector">
                        <ul className="menu-option-list">
                            <li className="menu-type-item" onClick={() => setCateType(Menu_breakfast)} >
                                Breakfast
                            </li>
                            <li className="menu-type-item" onClick={() => setCateType(Menu_lunch)} >
                                Lunch and Dinner
                            </li>
                            {/* <li className="menu-type-item">
                                Dinner
                            </li> */}
                            <li className="menu-type-item" onClick={() => setCateType(Menu_salad)} >
                                Vegetatian
                            </li>
                            <li className="menu-type-item">
                                Salads
                            </li>
                            <li className="menu-type-item">
                                Kids
                            </li>
                            <li className="menu-type-item">
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