import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
    Navigate,
  } from "react-router-dom";
  
  import App from "./App.jsx";
  
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
  
  function ProductDetails() {
    const { id } = useParams();
  
    const product = products.find(
      (item) => item.id === Number(id)
    );
  
    if (!product) {
      return (
        <main className="products-section">
          <h1>Product Not Found</h1>
          <p>Sorry, we could not find that product.</p>
          <Link to="/">Return to ComponentCorner</Link>
        </main>
      );
    }
  
    return (
      <main
        className="products-section"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 20px" }}
      >
        <Link to="/">← Back to Shop</Link>
  
        <article
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "28px",
            alignItems: "center",
            marginTop: "24px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
  
          <div>
            <h1>{product.name}</h1>
            <h2>${product.price.toFixed(2)}</h2>
            <p>{product.description}</p>
  
            <p>
              Browse our ComponentCorner collection to discover more
              technology for your everyday life.
            </p>
  
            <Link to="/" className="view-details-button">
              Continue Shopping
            </Link>
          </div>
        </article>
      </main>
    );
  }
  
  function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;