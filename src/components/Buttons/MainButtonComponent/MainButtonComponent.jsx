import { MainButtonPrimary, MainButtonSecondary } from "../MainButton"
import  '../Buttons.scss'


export const MainButtonComponent = () => {
    return (
        <div className="main-button-component">
            <MainButtonPrimary />
            <MainButtonSecondary />
        </div>
    )
}