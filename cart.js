<script>
// Cart Array
let cart = [];

// Add to Cart Function
function addToCart(name, price) {
    const existingItem = cart.find((item) => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    updateCartCount();
    alert(`${name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Open / Close Cart
document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('shopping-cart').classList.add('open');
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('shopping-cart').classList.remove('open');
});
</script> 