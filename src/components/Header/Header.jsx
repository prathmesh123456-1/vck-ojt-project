import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      
      <nav className="navbar">
      <h2>Vivekanand College </h2>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/courses">Courses</a>
        <a href="/contact">Contact</a>
        <a href="/apply" className="apply-now">Apply Now!</a>
      </nav>
    </header>
  );
};
export default Header;
