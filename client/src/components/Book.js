import React from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Book = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='book'> 
      <h1>Book Rooms</h1>
      <form>
        <DatePicker selected={date} onChange={date => setDate(date)} />
      </form>
    </div>
  );
}

export default Book
