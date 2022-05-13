import React from 'react'
import logo from '../../Media/logo.png'
import './NavBar.scss'
import './Closer.scss'



function NavBar() {
    return (
        <div className='Nav'>

            <input id="toggle" type="checkbox" />
            <label class="toggle-container" for="toggle">
                <span class="button button-toggle"></span>
            </label>
            <nav class="nav">

                <a class="nav-item" href="#">Packeges</a>
                <a class="nav-item" href="#">Menu</a>
                <a class="nav-item" href="#">Contact</a>
                <a class="nav-item" href="#">Book</a>
            </nav>
            <div className="wrapper">
                <div className="left">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="ul">
                        <li className="item">
                            <a href="#" className='link-prov'>Packeges</a>
                        </li>
                        <li className="item">
                            <a href="#" className='link-prov'>Menu</a>
                        </li>
                        <li className="item">
                            <a href="#" className='link-prov'>Contact</a>
                        </li>
                        <li className="item">
                            <a href="#" className='link-prov'>Book</a>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar