

import { useState } from "react";
import Header from "../components/Header/Header";
import Popup from "./Popup";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
  const [showPopup,setShowPopup]=useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <div className="homepage">
      {showPopup && <Popup onClose={handleClosePopup} />}

     

    <div className="container">
       <Header/>
       <div className="main-content">
  <div id="home-head">
    
       <div className="hero-cont">
         <h2 id="headline">Welcome to Vivekanand College!</h2>
        
        <p id="journey-start">Your journey to excellence starts hear.</p>
        <a href="/apply">
        <button id="apply" >apply</button>
        </a>
       </div>
        </div>
        <h2 id="well">Welcome to our College Page</h2>
        <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
        <h2>Why Choose Vivekanand college?</h2><hr></hr>
        <ul type="square">
            <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
            <li><b>Experienced Faculty:</b>Learn from renowned experts and passionate educators.</li>
            <li><b>Modern Facilities:</b>Well-equipped labs, expansive library, and comfortable campus.</li>
            <li><b>Holistic Development: </b>Focus on co-curricular activities, sports, and community service.</li>
            <li><b>Strong Placements:</b>Excellent career opportunities with leading companies.</li>        
        
        </ul><br></br>
        <h2>Campus Life & Facilities</h2>
        <img className="student"src="/images/student.jpeg"/>
        <img className="campus"src="/images/campus.jpg"/>
        <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
    <p>Ready to explore our courses?</p>
    <a href="/courses">
    <button id="explore">Explore Courses</button>
      </a>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
export default HomePage;