import React from 'react'
import logo from '../../Media/logo.png'
import './NavBar.scss'
import './Closer.scss'
import { HashLink as Link } from 'react-router-hash-link'




function NavBar() {
    return (
        <div className='Nav'>

            <div className="nav-wrapper">

                <input id="toggle" type="checkbox" />
                <label className="toggle-container" htmlFor="toggle">
                    <span className="button button-toggle"></span>
                </label>
                <nav className="nav">
                    <Link to="/" className='nav-item'>
                        Home
                    </Link>

                    <Link to="/packages" className='nav-item'>
                        Packages
                    </Link>

                    <Link to="/menu" className='nav-item'>
                        Menu
                    </Link>

                    <Link to="/Contact" className='nav-item'>
                        Contact
                    </Link>

                    <Link to="/booking" className='nav-item'>
                        Book Now
                    </Link>
                </nav>
                <div className="wrapper">
                    <div className="right">
                        <div className="logo">
                            <Link className='a-centered' to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="ul">
                            <li className="item">
                                <Link to="/packages" className="link-prov ">
                                    <span>
                                        Packages
                                    </span>
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/menu" className='link-prov'>
                                    <span>
                                        Menu
                                    </span>
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/contact" className='link-prov'>
                                    <span>
                                        Contact
                                    </span>
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/booking" className='link-prov'>
                                    <span>
                                        Book Now
                                    </span>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar