import React from 'react'
import { BookingForm } from '../../components/Booking/BookingForm'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import './Contact.scss'

function Contact() {
    const pageSelected = 'Contact Us'
    return (
        <div className='contact-main-wrapper'>
            <NavBar />
            <div className="contact-wrapper">
                <h1>
                    Contact Us
                </h1>
                <div className="contact-form-wrapper">
                    <BookingForm pageSelected={pageSelected} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact