import React from 'react'
import './Card.css'
function Card({ title, imageUrl, body }) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
                <center>
                    <div className='card-title'>
                        <h3>{title}</h3>
                    </div>
                    <div className="cardBody">
                        <p>{body}</p>
                    </div>
                    <div className="btn">
                        <button>
                            View More
                        </button>
                    </div>
                </center>
            </div>

        </div>
    )
}
export default Card