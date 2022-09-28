import { MainButtonPrimary, MainButtonSecondary } from "../MainButton"
import  '../Buttons.scss'
import React from "react"


export const MainButtonComponent = () => {
    return (
        <div className="main-button-component">
            <MainButtonPrimary />
            <MainButtonSecondary />
        </div>
    )
}