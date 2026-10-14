import { Link } from "react-router-dom";
import "./ProductCard.css";

// AI assistance: ChatGPT was used to help add React Router
// product detail navigation to this component.

function ProductCard({
  id,
  name,
  price,
  image,
  description,
  onAddToCart,
}) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
      />

      <div className="product-info">
        <h2>{name}</h2>

        <p className="product-description">
          {description}
        </p>

        <p className="product-price">
          ${price}
        </p>

        <button
          className="add-to-cart-button"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>

        <Link
          to={`/products/${id}`}
          className="view-details-button"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;