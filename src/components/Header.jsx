import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="store-name">{storeName}</h1>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <div className="cart-container">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;