

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import "./styles/Pages.css";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import ApplyPage from "./pages/ApplyPage";

import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup.jsx";


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Prathmesh Bhimarao Khot"
          studentPhotoUrl="/images/prathmesh.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>





    <div id="sir">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/Courses" element={<CoursesPage/>}/>
          <Route path="/Contact" element={<ContactPage/>}/>
          <Route path="/apply" element={<ApplyPage/>}/>
          
        </Routes>
        <ChatbotComponent/>
      </Router>

</div>
</>
  )
}
export default App;