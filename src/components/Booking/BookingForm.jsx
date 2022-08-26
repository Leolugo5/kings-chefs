import React from 'react'
import './BookingForm.scss'
export const BookingForm = ({ pageSelected }) => {
    return (
        <div>
            <form>
                <label htmlFor="Select Packages">Select Package</label>
                <select class="form-select bg-secondary-dark color-optional" aria-label="Default select example">
                    <option className='option' selected>Select a package</option>
                    <option value="1">Standar</option>
                    <option value="2">American</option>
                    <option value="3">Premium</option>
                    <option value="4">Kings buffet Experience</option>
                </select>
                <br />
                <label htmlFor="Adults">Adults</label>
                <select class="form-select bg-secondary-dark color-optional" aria-label="Default select example">
                    <option selected>Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">More than 10</option>
                </select>
                <br />
                <label htmlFor="Children">Children</label>
                <select class="form-select bg-secondary-dark color-optional" aria-label="Default select example">
                    <option selected>Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">More than 10</option>
                </select>
                <br />
                <label htmlFor="Days">Days</label>
                <select class="form-select bg-secondary-dark color-optional" aria-label="Default select example">
                    <option selected>Days</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">More than 10</option>
                </select>
                <br />
                <div class="input-group">
                    <span class="input-group-text bg-secondary-dark color-optional">Message</span>
                    <textarea class="form-control bg-secondary-dark color-optional inset-shadow" aria-label="With textarea"></textarea>
                </div>
                <br />
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control bg-secondary-dark color-optional inset-shadow" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary bg-secondary-dark color-optional"> {pageSelected} </button>
            </form>
            <br />
        </div>
    )
}
