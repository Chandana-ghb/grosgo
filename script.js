// Menu Toggle
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Dark Mode
function toggleDark() {
    document.body.classList.toggle("dark");
}

// Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}, 3000);

// Quantity
function incQty(btn) {
    let span = btn.previousElementSibling;
    span.textContent = parseInt(span.textContent) + 1;
}

function decQty(btn) {
    let span = btn.nextElementSibling;
    if (parseInt(span.textContent) > 1)
        span.textContent = parseInt(span.textContent) - 1;
}

// ✅ ADD TO CART (ONLY ONE VERSION – WITH IMAGE)
function addToCart(btn) {
    let card = btn.closest(".product-card");

    let name = card.querySelector("h3").textContent;
    let price = parseInt(card.querySelector(".price").textContent.replace(/[^0-9]/g, ''));
    let qty = parseInt(card.querySelector(".qty span").textContent);
    let image = card.querySelector("img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name, price, qty, image });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert(name + " added to cart!");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("count").textContent =
        cart.reduce((sum, item) => sum + item.qty, 0);
}

function openCart() {
    window.location.href = "cart.html";
}

window.onload = updateCartCount;

// Search
function searchProducts() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        card.style.opacity = title.includes(input) || input === "" ? "1" : "0.4";
    });
}

// Sort
function sortProducts() {
    let grid = document.querySelector(".product-grid");
    let cards = Array.from(document.querySelectorAll(".product-card"));
    let type = document.getElementById("sortPrice").value;

    cards.sort((a, b) => {
        let pa = parseInt(a.querySelector(".price").textContent.replace(/[^0-9]/g, ''));
        let pb = parseInt(b.querySelector(".price").textContent.replace(/[^0-9]/g, ''));
        return type === "low" ? pa - pb : pb - pa;
    });

    cards.forEach(c => grid.appendChild(c));
}



function goToProducts() {
    const productsSection = document.getElementById("products");
    productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Check login status
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  document.getElementById("username").textContent =
    `Hi, ${currentUser.username}`;
} else {
  // Show logout button
  document.getElementById("logoutBtn").style.display = "inline-block";
}

// Logout function
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}


