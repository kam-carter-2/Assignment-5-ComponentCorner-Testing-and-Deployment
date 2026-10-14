import "./Footer.css";

function Footer({ storeName, email, phone }) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>{storeName}</h2>
          <p>Quality technology and gadgets for everyday life.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>{email}</p>
          <p>{phone}</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Instagram | Facebook | TikTok</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {storeName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;