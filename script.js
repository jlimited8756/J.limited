// script.js

// Functionality for the sticker website

// Product management
const products = [];

function addProduct(product) {
    products.push(product);
}

function removeProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products.splice(index, 1);
    }
}

// Shopping cart operations
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function clearCart() {
    cart = [];
}

// Local storage persistence
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Form handling
const form = document.getElementById('productForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const product = {
        id: Date.now(),
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
    };
    addProduct(product);
    saveCartToLocalStorage();
    form.reset();
});

// Load cart when the page loads
loadCartFromLocalStorage();
