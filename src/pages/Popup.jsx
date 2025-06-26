import Header from "../components/Header/Header";


const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>✖</button>
        <Header/>

        <img src="\images\Virat.jpg" alt="Prathmesh khot" className="popup-img" />


        <div className="popup-credit">
          <p><strong>Developed & Deployed by:</strong></p>
             <h2 className="popup-name">Prathmesh khot</h2>

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


