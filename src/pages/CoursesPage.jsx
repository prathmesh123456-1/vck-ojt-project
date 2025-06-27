import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const CoursesPage = () => {
  return(
    <div className="container">
           <main className="main-content">
        <Header/>
        <h1 id="our">Our Academic Programs</h1>
        <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p><br></br>
        <h2>Discover Campus Life</h2>
        <video className="college"src="/videos/college.mp4" controls/>
        <h2> Undergraduate Programes(UG)</h2><hr></hr>
        <ul type="square">
              <li><b>Bachelor of Science(B.Sc)</b></li>
              <ul type="circle">
                <li>Computer Science (3 years)</li>
                <li>Information Technology(3 years)</li>
                <li>Biotechnology</li>
              </ul>
        </ul>
        <ul type="square">
              <li><b>Bachelor of commerce(B.com)</b></li>
              <ul type="circle">
                <li>Accounting & Finance (3 years)</li>
                <li>Banking& Insurance(3 years)</li>
                
              </ul>
        </ul>
      <ul type="square">
      <li><b>Bachelor of Arts(B.A)</b></li>
      <ul type="circle">
              <li>English Literature(3 years)</li>
              <li>Psychology(3 years)</li>
      </ul>
   </ul>
   <h2>Postgraduate Programs(PG)</h2><hr></hr>
   <ul type="square">
      <li><b>Master of Science(M.Sc)</b></li>
          <ul type="circle">
          <li>Computer Science(2 years)</li>
          <li>Information technology(2 years)</li>
          </ul>
          <li><b>Master of commerce(m.com)(2 years)</b></li>
          <li><b>Master of Arts(M.A)(2 years)</b></li>
   </ul>
   <table border="1">
    <tr>
    <th>Program Type</th>
    <th>Course Name</th>
    <th>Duration</th>
    <th>Annual Fee(INR)</th>
    <th>Eligiblity</th>

    </tr>
    <tr>
      <td>UG</td>
      <td>B.Sc Computer Science</td>
      <td>3 Years</td>
      <td> $ 85,000</td>
      <td> 10+2 with PCM(50%)</td>

    </tr>
    <tr>
      <td>UG</td>
      <td>B.Com.Accounting& Finance</td>
      <td>3 Years</td>
      <td> $ 70,000</td>
      <td> 10+2 with PCM(45%)</td>

    </tr>
    
<tr>
      <td>UG</td>
      <td>M.Sc.information Technology</td>
      <td>2 Years</td>
      <td> $ 95,000</td>
      <td> B.Sc IT/CS(50%)</td>
      </tr>
</table>

    <h2>Specialized & Vocational Courses</h2><hr></hr>
      <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
      <p>Have questions about a specific course?</p>
      <Link to="/Contact" className="in">Inquire About Courses</Link>
      
</main>
<Footer/>
</div>
  )
}
export default CoursesPage;