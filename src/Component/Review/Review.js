import React from 'react';
import './Review.css'
import img1 from '../../Images/reviewer-1.png'
import img2 from '../../Images/reviewer-2.png'
import img3 from '../../Images/reviewer-3.png'

const Review = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 review-card ">
            <img src={img1} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Alon Sehri</h5>
              <h5>Traveller</h5>
              <p className="card-text">Travel agents help their clients make travel plans. In addition to booking reservations, they assist customers in choosing their destination, transportation, and lodging and inform travellers of passport and visa requirements, rates of currency exchange, and import duties.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 review-card ">
            <img src={img2} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Ivrahomic</h5>
              <h5>Traveller</h5>
              <p className="card-text">Wholesale travel agents specialise in organizing tours and then selling them to retail travel agencies who in turn, sell on to travellers. Many tours also include optional side trips and activities that have to be planned carefully. Wholesale travel agents must have good marketing skills to interest retail travel agents in the tours they have developed.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 review-card ">
            <img src={img3} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Joshua Braidwood</h5>
              <h5>Traveller</h5>
              <p className="card-text">We were very happy with our holiday booking and our accommodation. We would book with TravelOnline again and definitely recommend their services to others.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;