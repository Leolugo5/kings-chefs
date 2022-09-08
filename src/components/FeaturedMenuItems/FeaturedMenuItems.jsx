import React, { useState } from 'react'
import { Menu_lunch } from '../../DB/Menus'
import DishCards from '../DishCards/DishCards'
import './FeaturedMenuItem.scss'
import Arrow_left from '../../Media/Arrow_left.png'
import Arrow_right from '../../Media/Arrow_right.png'

function FeaturedMenuItems() {
    
    const [menu, setMenu] = useState(0);

    return (
        <div className='featured-menu-item'>
            <div className="featured-menu-item-wrapper">
                <section className="featured-map">

                    <img onClick={() =>  Menu_lunch.length  -2< menu  ? setMenu(0) : setMenu(menu + 1)} className='Arrows' id='Arrow-left' src={Arrow_left} alt="next dish" />
                    {Menu_lunch.map((dish, i) => {
                        return <DishCards dish={dish} index={i}  dishSelected={menu}/>
                    })}
                    <img onClick={() =>  Menu_lunch.length  -2 < menu  ? setMenu(0) : setMenu(menu + 1)} className='Arrows' id='Arrow-right' src={Arrow_right} alt="next dish" />

                </section>
            </div>
        </div>
    )
}

export default FeaturedMenuItems