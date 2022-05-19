import React from 'react'
import './WhyUs.scss'


function WhyUs() {
    return (
        <div className='Why-us-main-wrapper'>
            <div className="why-us-wrapper">
                <div className="title padding-2r">
                    <h2>
                        Why Choose Us?
                    </h2>
                </div>
                <div className="content-wrapper">
                    <div className="content max-wid-768 margin-auto padding-t-2r text-justify">
                        <p className='margin-auto'>
                            We cook our food fresh every day, right in front of your eyes. We have no heating lamps, no dyes, flavor-additives, or preservatives. Just good food that's fresh, healthy, and natural.
                        </p>
                        <p className='margin-auto padding-t-2r'>
                            You will enjoy the convenience of eating "at home or your lodging place" with a piping hot breakfast in the morning and homemade flavorful dishes for lunch or dinner.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs