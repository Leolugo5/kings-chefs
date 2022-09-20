import React from 'react'
import './MenuItem.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";

export const MenuItem = ({ cat, i }) => {
    const getUrl = () => {
        let url = `${cat.img}`;
        let someUrl = url.slice(32);
        let mainUrl = someUrl.substring(0, someUrl.length - 17);
        const str = `https://drive.google.com/uc?id=${mainUrl}`
        return str
    }
    const mainUrl = getUrl()
    return (
        <>
            <div className="menu-items-card" id={i}>
                <div className="img-cover">
                    <LazyLoadImage className='img-file' src={mainUrl} alt={cat.alt} />
                </div>
                <h3 className="dish-title">
                    {cat.name}
                </h3>
                <p>{cat.description}</p>
            </div>
        </>
    )
} 