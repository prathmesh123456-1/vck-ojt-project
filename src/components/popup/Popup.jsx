import React from "react";
import "./Popup.css";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>✖</button>

        <img src="/images/virat.jpg" alt="Prathmesh khot" className="popup-img" />


        <div className="popup-credit">
          <p><strong>Developed & Deployed by:</strong></p>
             <h2 className="popup-name">Akshay Dandge</h2>

          <p className="popup-note">
            Learned so much during this OJT! <br />
            This all showcases my independent coding and deployment skills.
          </p>
        </div>

        <button className="popup-gotit" onClick={onClose}>Got it</button>
      </div>
    </div>
  );
};

export default Popup;






