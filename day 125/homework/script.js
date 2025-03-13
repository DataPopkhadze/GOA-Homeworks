document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("user")) {
        document.getElementById("auth").style.display = "none";
        document.getElementById("store").style.display = "block";
        loadProducts();
        displayCart();
    }
});

let productsData = []; 

function registerUser() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
        localStorage.setItem("user", username);
        document.getElementById("auth").style.display = "none";
        document.getElementById("store").style.display = "block";
        loadProducts();
        displayCart();
    }
}

function loadProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            productsData = data; 
            let productsHTML = "";
            data.forEach(product => {
                productsHTML += `
                    <div class="product">
                        <img src="${product.image}" alt="${product.title}">
                        <h4>${product.title}</h4>
                        <p>$${product.price.toFixed(2)}</p>
                        <button onclick='addToCart(${product.id})'>Add to Cart</button>
                    </div>`;
            });
            document.getElementById("products").innerHTML = productsHTML;
        });
}

function addToCart(productId) {
    let product = productsData.find(p => p.id === productId);
    if (!product) return; 

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartHTML = "";

    if (cart.length === 0) {
        cartHTML = "<p>Cart is empty</p>";
    } else {
        cart.forEach((item, index) => {
            cartHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}">
                    <span>${item.title} - $${item.price.toFixed(2)}</span>
                    <button onclick='removeFromCart(${index})'>Remove</button>
                </div>`;
        });
    }
    document.getElementById("cart").innerHTML = cartHTML;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function buyAll() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Purchase successful!");
        localStorage.removeItem("cart");
        displayCart();
    }
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}
