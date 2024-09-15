let cart = [];

// Add item to the cart
document.getElementById('itemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('itemName').value;
    const price = parseFloat(document.getElementById('itemPrice').value);
    const quantity = parseInt(document.getElementById('itemQuantity').value);

    // Check if item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity; // Update quantity if item already exists
    } else {
        cart.push({ name, price, quantity });
    }

    displayCart();
    e.target.reset();
});

// Display the cart items
function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear current display

    // Use forEach() to list each item
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <strong>${item.name}</strong> - $${item.price.toFixed(2)} x ${item.quantity}
            <button onclick="removeItem(${index})">Remove</button>
            <button onclick="updateItem(${index})">Update</button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    calculateTotal();
}

// Remove item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

// Update item quantity
function updateItem(index) {
    const newQuantity = prompt('Enter new quantity:');
    if (newQuantity !== null) {
        cart[index].quantity = parseInt(newQuantity);
        if (cart[index].quantity === 0) {
            cart.splice(index, 1); // Remove if quantity is zero
        }
        displayCart();
    }
}

// Calculate total price
function calculateTotal() {
    const totalPriceElement = document.getElementById('totalPrice');
    const discountMessage = document.getElementById('discountMessage');

    // Use map() to get total prices for each item and reduce() to sum them
    let total = cart.map(item => item.price * item.quantity).reduce((sum, price) => sum + price, 0);

    // Apply discount if total exceeds $100
    if (total > 100) {
        total *= 0.9; // 10% discount
        discountMessage.innerText = '10% discount applied!';
    } else {
        discountMessage.innerText = '';
    }

    totalPriceElement.innerText = total.toFixed(2);
}

// Filter items by price or quantity
function filterItemsByPrice(minPrice, maxPrice) {
    const filteredItems = cart.filter(item => item.price >= minPrice && item.price <= maxPrice);
    return filteredItems;
}

function filterItemsByQuantity(minQuantity) {
    const filteredItems = cart.filter(item => item.quantity >= minQuantity);
    return filteredItems;
}
