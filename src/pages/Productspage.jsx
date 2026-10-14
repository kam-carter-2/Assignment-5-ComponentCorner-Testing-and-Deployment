import ProductCard from "../components/ProductCard";

// AI assistance: ChatGPT was used to help organize this page component.

function ProductsPage({ products, addToCart }) {
  return (
    <main className="products-section">
      <h2>Our Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;