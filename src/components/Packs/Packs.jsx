import React from 'react'
import './packs.scss'
import { Menu_Packs } from '../../DB/Menus.js'
import PackCard from '../Pack_card/PackCard'

function Packs() {
    return (
        <div className='packs_section'>
            <div className="packs-wrapper">

                <div className="packs_name">
                    <div className="title_wrapper">
                        <h2 className="title">
                            see our packages
                        </h2>
                    </div>
                </div>
                <section className="menu_map">
                    {Menu_Packs.map((pack, i) => {
                        return <PackCard pack={pack} index={i} />
                    })}
                </section>
            </div>
        </div>
    )
}

export default Packs