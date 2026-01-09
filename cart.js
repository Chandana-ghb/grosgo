let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItems = document.getElementById("cartItems");
let total = 0;

if (cart.length === 0) {
    cartItems.innerHTML = "<p class='empty'>Your cart is empty 😔</p>";
} else {
    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div class="cart-card">
                
                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>₹${item.price} × ${item.qty}</p>
                    <strong>₹${item.price * item.qty}</strong>
                </div>
            </div>
        `;
    });

    document.getElementById("totalPrice").textContent =
        "Grand Total: ₹" + total;
}


