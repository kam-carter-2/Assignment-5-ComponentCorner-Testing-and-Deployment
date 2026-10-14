import "./CartItem.css";

function CartItem({ product, onRemove }) {
  return (
    <div className="cart-item">
      <img
        src={product.image}
        alt={product.name}
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>

      <button
        className="remove-cart-button"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;