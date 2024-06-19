// Función para agregar un producto al carrito y mostrar notificación
function addToCart(productName, productPrice) {
    // Aquí podrías agregar la lógica para agregar el producto al carrito
    // Por ahora, solo mostraremos una notificación

    // Mostrar la notificación en la parte superior de la página
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = `${productName} añadido al carrito!`;
    document.body.appendChild(notification);

    // Quitar la notificación después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Seleccionar todos los botones "Añadir al carrito" y añadir un evento clic a cada uno
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const productName = productItem.querySelector('.product-item__name').textContent;
        const productPrice = productItem.querySelector('.product-item__price').textContent;
        addToCart(productName, productPrice);
    });
});
