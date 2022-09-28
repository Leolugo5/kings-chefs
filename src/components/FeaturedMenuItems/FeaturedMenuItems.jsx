import React, { useState } from 'react'
import DishCards from '../DishCards/DishCards'
import './FeaturedMenuItem.scss'
import { Menu_featured } from '../../DB/Menu_featured'

function FeaturedMenuItems() {

    const [menu, setMenu] = useState(0);
    const Menu_lunch = Menu_featured;
    return (
        <div className='featured-menu-item'>
            <div className="featured-menu-item-wrapper">
                <section className="featured-map">

                    <svg onClick={() => Menu_lunch.length - 2 < menu ? setMenu(0) : setMenu(menu + 1)} className='Arrows bi bi-arrow-left' id='Arrow-left' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    {Menu_lunch.map((dish, i) => {
                        return <DishCards dish={dish} index={i} dishSelected={menu} />
                    })}
                    <svg onClick={() => Menu_lunch.length - 2 < menu ? setMenu(0) : setMenu(menu + 1)} className='Arrows bi bi-arrow-right' id='Arrow-right' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>

                </section>
            </div>
        </div>
    )
}

export default FeaturedMenuItems