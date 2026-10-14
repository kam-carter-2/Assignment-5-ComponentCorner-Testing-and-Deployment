import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Premium wireless headphones with clear sound and comfortable ear cushions.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 129.99,
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Stay connected with fitness tracking, notifications, and a modern design.",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 89.99,
      image:
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "A responsive mechanical keyboard built for productivity, gaming, and everyday use.",
    },
  ];

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove)
    );
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="app">
      <Header
        storeName="ComponentCorner"
        cartCount={cart.length}
      />

      <Hero
        title="Upgrade Your Everyday Tech"
        subtitle="Discover quality gadgets designed to make your everyday life easier."
        buttonText="Shop Now"
      />

      <main className="products-section" id="products">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </main>

      <section className="cart-section" id="cart">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty. Start adding items to see them here!
          </p>
        ) : (
          <div className="cart-content">
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                product={item}
                onRemove={() => removeFromCart(index)}
              />
            ))}

            <div className="cart-total">
              <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </section>

      <section className="more-information">
        <h2>Explore ComponentCorner</h2>
        <p>
          Find technology for your everyday needs.
        </p>
        <Link to="/products/1" className="view-details-button">
          Explore a Product
        </Link>
      </section>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(662) 555-0147"
      />
    </div>
  );
}

export default App;