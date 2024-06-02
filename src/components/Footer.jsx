import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Contact Us</h3>
        <p>Feel free to reach out to us for any inquiries or feedback.</p>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p>&copy; 2024 CleverBooks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
