import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Book.css'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios'
import { useEffect } from 'react';

export const Book = () => {
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [departureTime, setDepartureTime] = useState(new Date());
  const [singleRoom, setSingleRoom] = useState(null);
  const [doubleRoom, setDoubleRoom] = useState(null);
  const [singleRoomAvail, setSingleRoomAvail] = useState(0);
  const [doubleRoomAvail, setDoubleRoomAvail] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5001/api/room/checkRoom', { arrivalTime: arrivalTime, departureTime: departureTime})
      .then(response => { 
        setSingleRoomAvail(response.data.singleRoom);
        setDoubleRoomAvail(response.data.doubleRoom);
      })
      .catch(err => console.log(err));
  })

  const handleArrivalTimeChange = (date) => {
    setArrivalTime(date);
  };

  const handleDepartureTimeChange = (date) => {
    setDepartureTime(date);
  };

  const handleSingleRoom = (e) => {
    setSingleRoom(e.target.value);
  };

  const handleDoubleRoom = (e) => {
    setDoubleRoom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (singleRoomAvail >= singleRoom && doubleRoomAvail >= doubleRoom) {
      setIsAvailable(true);
      navigate('./FillDetails');
    }
    else {
      setIsAvailable(false);
    }
  }

  return (
    <div className='book'>
      <h3>Book Rooms</h3>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-body'>
          <div className="arrivaldate">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                label="Arrival Date"
                format="dd/MM/yyyy"
                value={arrivalTime}
                onChange={handleArrivalTimeChange}
              /> 
            </MuiPickersUtilsProvider>
          </div>
          <div className="departuredate">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                label="Departure Date"
                format="dd/MM/yyyy"
                value={departureTime}
                onChange={handleDepartureTimeChange}
              /> 
            </MuiPickersUtilsProvider>
          </div>
          <div className='singleroom'>
            <label className="form__label" for="singleRoom">Single Rooms</label>
            <input 
              className="form__input" 
              type="number" 
              value={singleRoom} 
              onChange = {handleSingleRoom}
              id="singleRoom" />
          </div>
          <div className='doubleroom'>
            <label className="form__label" for="doubleRoom">Double Rooms</label>
            <input 
              className="form__input" 
              type="number" 
              value={doubleRoom} 
              onChange = {handleDoubleRoom} 
              id="doubleRoom" />
          </div>
          <div className="form-submit">
            <input type="submit" value="Continue" className="btn btn-primary" />
          </div>
        </div>
      </form>
      { isSubmit && !isAvailable && <p style={{color:'red'}}>Sufficient rooms not available</p> }
    </div>
  );
}

export default Book