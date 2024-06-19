document.addEventListener('DOMContentLoaded', function() {
    // Datos simulados de productos (nombre, precio, imagen)
    const productsData = [
        { name: 'Proteína 1', price: '$1009.99', image: 'img/OIP (2).jpg' },
        { name: 'Proteína 2', price: '$2009.99', image: 'img/OIP (1).jpg' },
        { name: 'Proteína 3', price: '$2009.99', image: 'img/images (1).jpg' },
        { name: 'Pre-entreno 1', price: '$19.99', image: 'img/images.jpg' },
        { name: 'Pre-entreno 2', price: '$29.99', image: 'img/descarga (1).jpg' },
        { name: 'Pre-entreno 3', price: '$29.99', image: 'img/OIP (1).jpg' }
    ];

    // Función para generar el HTML de un producto
    function generateProductHTML(product) {
        return `
            <div class="product-item">
                <img src="${product.image}" alt="${product.name}" class="product-item__image">
                <div class="product-item__details">
                    <h3 class="product-item__name">${product.name}</h3>
                    <p class="product-item__price">${product.price}</p>
                    <button class="add-to-cart-btn">Añadir al carrito</button>
                </div>
            </div>
        `;
    }

    // Función para añadir productos al DOM
    function renderProducts(products, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`No se encontró el contenedor con ID ${containerId}`);
            return;
        }

        products.forEach(product => {
            const productHTML = generateProductHTML(product);
            container.innerHTML += productHTML;
        });

        // Agregar event listeners a los botones "Añadir al carrito"
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productItem = this.closest('.product-item');
                if (!productItem) {
                    console.error('No se pudo encontrar el elemento .product-item');
                    return;
                }

                const productName = productItem.querySelector('.product-item__name');
                const productPrice = productItem.querySelector('.product-item__price');

                if (!productName || !productPrice) {
                    console.error('No se encontraron los elementos .product-item__name o .product-item__price');
                    return;
                }

                addToCart(productName.textContent, productPrice.textContent);
                showNotification(productName.textContent);
            });
        });
    }

    // Simulación de añadir al carrito
    function addToCart(name, price) {
        console.log(`Añadido al carrito: ${name} - ${price}`);
        // Aquí iría la lógica real para añadir el producto al carrito
    }

    // Simulación de mostrar notificación
    function showNotification(productName) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = `${productName} añadido al carrito`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Llamar a la función para renderizar los productos al cargar la página
    renderProducts(productsData.slice(0, 3), 'proteins-grid'); // Primeros 3 productos en la sección de proteínas
    renderProducts(productsData.slice(3), 'preworkouts-grid'); // Resto de los productos en la sección de pre-entrenos
});
