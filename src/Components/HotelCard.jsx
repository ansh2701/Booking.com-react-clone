import React from "react";
import { Link } from "react-router-dom";

const HotelCard = () => {
  return (
    <div className="cardWrapper">
      <div className="cardContainer">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
          />
        <div className="cardContent">
          <h1>Tower Street Apartments</h1>
          <span>500m from center</span>
          <span className="cardOffer">Free airport Taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="cardDetails">
            <div className="cardRating">
                <span>Excellent</span>
                <span>8.9</span>
            </div>
            <div className="cardPrice">
                <span>1,256</span>
                <span>Includes taxes and fees</span>
                <button className="btn"><Link to="/hotels/1">See avialibilty</Link></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
