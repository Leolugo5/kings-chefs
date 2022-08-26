import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import './Booking.scss'
import { BookingForm } from '../../components/Booking/BookingForm'

function Book() {
  const pageSelected =  'Book Now'
  return (
    <div className='booking-main-wrapper'>
      <div className="booking-wrapper">
        <NavBar />
        <h1>Book Now </h1>

        <div className="booking-form-wrapper">
          <BookingForm  pageSelected={pageSelected} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Book