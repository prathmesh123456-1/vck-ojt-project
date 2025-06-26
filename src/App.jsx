

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import "./styles/Pages.css";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import ApplyPage from "./pages/ApplyPage";


const App = () => {
  return(
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
  )
}
export default App;