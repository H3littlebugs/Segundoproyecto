
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item');
            if (!productItem) {
                console.error('No se pudo encontrar el elemento .product-item');
                return; // Salir de la función si no se encuentra product-item
            }

            const productName = productItem.querySelector('.product-item__name');
            const productPrice = productItem.querySelector('.product-item__price');

            if (!productName || !productPrice) {
                console.error('No se encontraron los elementos .product-item__name o .product-item__price');
                return; // Salir de la función si no se encuentran los elementos necesarios
            }

            addToCart(productName.textContent, productPrice.textContent); // Llamar función para añadir al carrito

            // Mostrar notificación
            showNotification(productName.textContent);
        });
    });

    function addToCart(name, price) {
        // Simulación de función para añadir al carrito
        console.log(`Añadido al carrito: ${name} - ${price}`);
        // Aquí iría la lógica real para añadir el producto al carrito
    }

    function showNotification(productName) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = `${productName} añadido al carrito`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
})