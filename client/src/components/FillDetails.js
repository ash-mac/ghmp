import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

export const FillDetails = () => {
  const [guestName, setGuestName] = useState(null);
  const [address, setAddress] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(null);
  const [purpose, setPurpose] = useState(null);
  const [category, setCategory] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    axios.post('http://localhost:5001/api/room/bookRoom', {
    guestName: guestName,
    address: address,
    numberOfGuests: numberOfGuests,
    arrivalTime: location.arrivalTime,
    departureTime: location.departureTime,
    singleRoom: location.singleRoom,
    doubleRoom: location.doubleRoom,
    purpose: purpose,
    category: category})
    .then(response => {
      console.log('Booking Done')
      navigate('../')
    })
    .catch(err => console.log(err))
  }

  return(
    <div className='filldetails'>
      <h3>Fill in the details</h3>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-body'>
          <div className='guestname'>
            <label className="form__label" for="guestName">Guest Name</label>
            <input 
              required
              className="form__input" 
              type="text" 
              value={guestName} 
              onChange = {(e) => setGuestName(e.target.value)}
              id="guestName" />
          </div>
          <div className='address'>
            <label className="form__label" for="address">Address</label>
            <input 
              required
              className="form__input" 
              type="text" 
              value={address} 
              onChange = {(e) => setAddress(e.target.value)}
              id="address" />
          </div>
          <div className='numberofguests'>
            <label className="form__label" for="numberOfGuests">Number of guests</label>
            <input 
              required
              className="form__input" 
              type="number" 
              value={numberOfGuests} 
              onChange = {(e) => setNumberOfGuests(e.target.value)}
              id="numberOfGuests" />
          </div>
          <div className='purpose'>
            <label className="form__label" for="purpose">Purpose</label>
            <textarea
              required
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            ></textarea>
          </div>
          <div className='category'>
            <label className="form__label" for="address">Address</label>
            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
              <option value="Category C">Category C</option>
            </select>
          </div>
          <div className="form-submit">
            <input type="submit" value="Book the room" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FillDetails;