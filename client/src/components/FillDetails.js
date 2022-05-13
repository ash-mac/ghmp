import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from "react";

export const FillDetails = () => {
  const [guestName, setGuestName] = useState(null);
  const [address, setAddress] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(null);
  const [purpose, setPurpose] = useState(null);
  const [category, setCategory] = useState(null);

  const location = useLocation();

  const handleSubmit = (e) => {

  }

  return(
    <h1>Introduction
We have covered various feature engineering strategies for dealing with structured data in the first two parts of this series. Check out Part-I: Continuous, numeric data and Part-II: Discrete, categorical data for a refresher. In this article, we will look at how to work with text data, which is definitely one of the most abundant sources of unstructured data. Text data usually consists of documents which can represent words, sentences or even paragraphs of free flowing text. The inherent unstructured (no neatly formatted data columns!) and noisy nature of textual data makes it harder for machine learning methods to directly work on raw text data. Hence, in this article, we will follow a hands-on approach to explore some of the most popular and effective strategies for extracting meaningful features from text data. These features can then be used in building machine learning or deep learning models easily.

Motivation
Feature Engineering is often known as the secret sauce to creating superior and better performing machine learning models. Just one excellent feature could be your ticket to winning a Kaggle challenge! The importance of feature engineering is even more important for unstructured, textual data because we need to convert free flowing text into some numeric representations which can then be understood by machine learning algorithms. Even with the advent of automated feature engineering capabilities, you would still need to understand the core concepts behind different feature engineering strategies before applying them as black box models. Always remember, “If you are given a box of tools to repair a house, you should know when to use a power drill and when to use a hammer!”.

Understanding Text Data
I’m sure all of you must be having a fair idea of what textual data comprises of in this scenario. Do remember you can always have text data in the form of structured data attributes, but usually those fall under the umbrella of structured, categorical data.</h1>
    /*<div className='filldetails'>
      <h3>Fill in the details</h3>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-body'>
          <div className='guestname'>
            <label className="form__label" for="guestName">Guest Name</label>
            <input 
              className="form__input" 
              type="text" 
              value={guestName} 
              onChange = {(e) => setGuestName(e)}
              id="guestName" />
          </div>
          <div className="form-submit">
            <input type="submit" value="Continue" className="btn btn-primary" />
          </div>
        </div>
      </form>
      { isSubmit && !isAvailable && <p style={{color:'red'}}>Sufficient rooms not available</p> }
    </div>*/
  )
}

export default FillDetails;