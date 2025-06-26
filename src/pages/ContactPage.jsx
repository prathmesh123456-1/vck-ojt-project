import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ContactPage = () => {
  return(
    <div className="container">
            <main className="main-content"> 

    <Header/><br></br>
    <h1 id="contact"><u>Contact Us</u></h1>
    <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
    <h2>General Enquiries</h2><hr></hr>
      <p><b>Vivekanand College Main Campus</b></p>
      <p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
India</p>
    <p>Phone: <b>+91 12345 67890</b></p>
    <p>Email:<b>info@vivekanandcollege.edu</b></p>
    <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
    <h2>Admissions Office</h2><hr></hr>
      <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
      <p>Phone: +91 98765 43210</p>
      <p>Email: admissions@vivekanandcollege.edu</p>
      <h2>Student Support Services</h2><hr></hr>
      <p>For current student support, academic advising, or general assistance:</p>
      <p>Phone: +91 87654 32109</p>
      <p>Email: studentsupport@vivekanandcollege.edu</p>
      <h2>Find Us on the Map</h2><hr></hr>
      <a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
      <h2>Send Us a Message</h2><hr></hr>
      <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
 
    </main>
     <Footer/>
 </div>
  )
}
export default ContactPage;