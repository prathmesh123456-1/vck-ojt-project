import {Link} from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling
const Header =() =>{
    function toggleMenu() {
  const navlink = document.getElementById("navlink");
  if (navlink) {
    navlink.classList.toggle("active");
  } else {
    console.warn("navlink element not found");
  }
}
  return(
    <div>
      <header>
          <div className="navbar">
            <div className="logo"><a href="/home">Vivekanand College</a></div><br/>
            <div className="menu" onClick={toggleMenu}>☰</div>
             <ul className="nav" id="navlink">
            <li className="nav-item"><Link to="/home">Home</Link></li>
           <li className="nav-item"><Link to="/about">About</Link></li>
           <li className="nav-item"><Link to="/courses">Courses</Link></li>
           <li className="nav-item"><Link to="/contact">Contact</Link></li>
           <li className="btn1"><Link to="/apply">Apply Now!</Link></li>
          </ul>
          

        </div>
        
      </header>
    </div>
  )
}
export default Header;