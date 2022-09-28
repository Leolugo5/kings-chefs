import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className='footer wd-100 padding-2r  new-section-border '>
            <div className="footer-wrapper wd-100">
                <div className="content wd-100 display-flex">
                    <span>
                        © Copyright King's Chefs All Rights Reserved
                    </span>
                    <div className=" credits max-wid-1100 margin-auto">
                        <span> Site Designed  By </span>
                        <a href="https://www.behance.net/cevroseduned29" target="blank" className="leo-profile a-text"> Cevannah Duncan </a>
                    </div>
                    <div className=" credits max-wid-1100 margin-auto">
                        <span> Site Created By </span>
                        <a href="https://leonardo-lugo.vercel.app/" target="blank" className="leo-profile a-text"> Leonardo Lugo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer