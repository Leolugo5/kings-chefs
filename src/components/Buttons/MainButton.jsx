import React from 'react'
import { Link } from 'react-router-dom'
import './Buttons.scss'

export const MainButtonPrimary = () => {
    return (
        <div className="main-button-primary">
            <Link to="/booking">
                Book Now
            </Link>
        </div>
    )
}

export const MainButtonSecondary = () => {
    return (
        <div className="main-button-secondary">
            <Link to="/menu">
                See Menu
            </Link>
        </div>
    )
}
