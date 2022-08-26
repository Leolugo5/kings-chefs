import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className='footer wd-100 padding-2r  new-section-border '>
            <div className="footer-wrapper wd-100">
                <div className="content wd-100 display-flex">
                    <div class=" max-wid-1100 margin-auto">
                        <span>
                            © Copyright King's Chefs All Rights Reserved |
                        </span>
                        <span> Site Created By </span>
                        <a href="https://leonardo-lugo.vercel.app/" target="blank" class="leo-profile a-text"> LEONARDO LUGO</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer