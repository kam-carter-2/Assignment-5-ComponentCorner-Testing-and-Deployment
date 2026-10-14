import CartItem from "../components/CartItem";

// AI assistance: ChatGPT was used to help organize this page component.

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <main className="cart-section">
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
    </main>
  );
}

export default CartPage;