import React from 'react';
import './Carousel.css';
import Card from './Card';
export const
  Carousel = () => {
    return (
      <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src=".\guest_house.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Welcome to IIT Ropar</h1>
                <p>Guest House View from CSE Block</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src=".\room3.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Double-Bed Rooms</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src=".\room1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Single-Bed Rooms</h5>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="cardRow">
          <Card
            title='Events'
            imageUrl='.\calendar.png'
            body='Alumni Meets, Research Conferences, Fests, find all upcoming events here.'
            redirect='.\'
          />
          <Card
            title='Guest Rooms'
            imageUrl='.\building.png'
            body='A researcher, alumni or a parent, book rooms for all your needs here'
            redirect='.\GuestForm'
          />
          <Card
            title='Dining'
            imageUrl='.\restaurant.png'
            body='One cannot think well, sleep well, if one has not dined well.Your culinary needs,here'
            redirect='.\'
          />
        </div>
      </>

    )
  }
