import { Link, useParams } from "react-router-dom";

// AI assistance: ChatGPT was used to help create and organize this page component.

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main className="products-section">
        <h2>Product Not Found</h2>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  return (
    <main className="product-details">
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-details-info">
        <h2>{product.name}</h2>
        <h3>${product.price.toFixed(2)}</h3>

        <p>{product.description}</p>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <Link to="/products">
          Back to Products
        </Link>
      </div>
    </main>
  );
}

export default ProductDetailsPage;