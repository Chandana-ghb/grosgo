let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItems = document.getElementById("cartItems");
let totalPriceEl = document.getElementById("totalPrice");

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p class='empty'>Your cart is empty 😔</p>";
    totalPriceEl.textContent = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-card">
        <img src="${item.image}" class="cart-img" />

        <div class="cart-info">
          <h3>${item.name}</h3>
          <p>₹${item.price} × ${item.qty}</p>
          <strong>₹${item.price * item.qty}</strong>
        </div>

        <button class="remove-btn" onclick="removeFromCart(${index})">
          Remove
        </button>
      </div>
    `;
  });

  totalPriceEl.textContent = "Grand Total: ₹" + total;
}

// REMOVE ITEM
function removeFromCart(index) {
  cart.splice(index, 1); // remove item
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// INITIAL LOAD
renderCart();
