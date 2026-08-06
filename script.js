"use strict";


/* CONFIGURACIÓN GENERAL */



const WHATSAPP_NUMBER = "525610791508";


/* BASE DE DATOS DEL MENÚ */

const products = [

    /* HAMBURGUESAS */

    {
        id: 1,
        name: "Hamburguesa Rocker",
        category: "hamburguesas",
        categoryLabel: "Hamburguesas",
        price: 149,
        badge: "Más vendida",

        
        image: "assets/img/burger1.webp",

        description:
            "Carne artesanal, queso cheddar, tocino, cebolla caramelizada y salsa de la casa.",

        options: [
            "Sin cebolla",
            "Sin pepinillos",
            "Sin tocino",
            "Sin salsa"
        ],

        extras: [
            {
                name: "Extra carne",
                price: 45
            },
            {
                name: "Extra queso",
                price: 20
            },
            {
                name: "Extra tocino",
                price: 25
            }
        ]
    },

    {
        id: 2,
        name: "Hamburguesa Inferno",
        category: "hamburguesas",
        categoryLabel: "Hamburguesas",
        price: 159,
        badge: "Picante",

        
        image: "assets/img/burger2.webp",

        description:
            "Carne, queso pepper jack, jalapeño, cebolla crispy y salsa inferno.",

        options: [
            "Sin cebolla crispy",
            "Sin jalapeño",
            "Sin salsa inferno",
            "Salsa aparte"
        ],

        extras: [
            {
                name: "Extra carne",
                price: 45
            },
            {
                name: "Extra queso",
                price: 20
            },
            {
                name: "Extra jalapeño",
                price: 12
            }
        ]
    },

    {
        id: 3,
        name: "Hamburguesa Garage",
        category: "hamburguesas",
        categoryLabel: "Hamburguesas",
        price: 179,
        badge: "Doble carne",

        
        image: "assets/img/burger3.webp",

        description:
            "Doble carne, doble queso, tocino, aros de cebolla y aderezo ahumado.",

        options: [
            "Sin tocino",
            "Sin aros de cebolla",
            "Sin aderezo",
            "Aderezo aparte"
        ],

        extras: [
            {
                name: "Extra carne",
                price: 45
            },
            {
                name: "Extra queso",
                price: 20
            },
            {
                name: "Extra aros de cebolla",
                price: 22
            }
        ]
    },


    /* ALITAS */

    {
        id: 4,
        name: "Alitas BBQ",
        category: "alitas",
        categoryLabel: "Alitas",
        price: 139,
        badge: "Clásicas",

        
        image: "assets/img/alitas1.webp",

        description:
            "Ocho alitas crujientes bañadas en salsa BBQ ahumada.",

        options: [
            "Salsa aparte",
            "Sin apio",
            "Sin zanahoria"
        ],

        extras: [
            {
                name: "Extra aderezo ranch",
                price: 18
            },
            {
                name: "Extra salsa BBQ",
                price: 15
            },
            {
                name: "Agregar papas",
                price: 35
            }
        ]
    },

    {
        id: 5,
        name: "Alitas Inferno",
        category: "alitas",
        categoryLabel: "Alitas",
        price: 145,
        badge: "Muy picantes",

        
        image: "assets/img/alitas2.webp",

        description:
            "Ocho alitas con salsa picante de chiles tostados y mantequilla.",

        options: [
            "Salsa aparte",
            "Mitad salsa inferno",
            "Sin vegetales"
        ],

        extras: [
            {
                name: "Extra aderezo ranch",
                price: 18
            },
            {
                name: "Extra salsa inferno",
                price: 15
            },
            {
                name: "Agregar papas",
                price: 35
            }
        ]
    },


    /* BONELESS */

    {
        id: 6,
        name: "Boneless BBQ",
        category: "boneless",
        categoryLabel: "Boneless",
        price: 135,
        badge: "Favoritos",

        
        image: "assets/img/boneless1.webp",

        description:
            "Piezas de pollo empanizadas con salsa BBQ y aderezo ranch.",

        options: [
            "Salsa aparte",
            "Sin ranch",
            "Sin vegetales"
        ],

        extras: [
            {
                name: "Extra ranch",
                price: 18
            },
            {
                name: "Extra salsa BBQ",
                price: 15
            },
            {
                name: "Agregar papas",
                price: 35
            }
        ]
    },

    {
        id: 7,
        name: "Boneless Buffalo",
        category: "boneless",
        categoryLabel: "Boneless",
        price: 139,
        badge: "Intensos",

        
        image: "assets/img/boneless2.webp",

        description:
            "Pollo crujiente cubierto con salsa buffalo de intensidad media.",

        options: [
            "Salsa aparte",
            "Poca salsa",
            "Sin vegetales"
        ],

        extras: [
            {
                name: "Extra ranch",
                price: 18
            },
            {
                name: "Extra buffalo",
                price: 15
            },
            {
                name: "Agregar papas",
                price: 35
            }
        ]
    },


    /* PAPAS */

    {
        id: 8,
        name: "Papas Clásicas",
        category: "papas",
        categoryLabel: "Papas",
        price: 69,
        badge: "Crujientes",

        
        image: "assets/img/papas1.webp",

        description:
            "Papas a la francesa sazonadas con sal de ajo y especias.",

        options: [
            "Sin sal de ajo",
            "Sin especias",
            "Catsup aparte"
        ],

        extras: [
            {
                name: "Extra queso",
                price: 20
            },
            {
                name: "Extra tocino",
                price: 25
            },
            {
                name: "Extra aderezo",
                price: 18
            }
        ]
    },

    {
        id: 9,
        name: "Papas Cargadas",
        category: "papas",
        categoryLabel: "Papas",
        price: 109,
        badge: "Para compartir",

        
        image: "assets/img/papas2.webp",

        description:
            "Papas con queso cheddar, tocino, jalapeño y aderezo especial.",

        options: [
            "Sin jalapeño",
            "Sin tocino",
            "Sin aderezo",
            "Aderezo aparte"
        ],

        extras: [
            {
                name: "Extra queso",
                price: 20
            },
            {
                name: "Extra tocino",
                price: 25
            },
            {
                name: "Extra jalapeño",
                price: 12
            }
        ]
    },


    /* MALTEADAS */

    {
        id: 10,
        name: "Malteada Chocolate",
        category: "malteadas",
        categoryLabel: "Malteadas",
        price: 89,
        badge: "Cremosa",

        
        image: "assets/img/malteada1.webp",

        description:
            "Helado de chocolate, leche, crema batida y jarabe de chocolate.",

        options: [
            "Sin crema batida",
            "Sin jarabe",
            "Poca azúcar"
        ],

        extras: [
            {
                name: "Extra chocolate",
                price: 15
            },
            {
                name: "Extra crema batida",
                price: 12
            },
            {
                name: "Agregar galleta",
                price: 18
            }
        ]
    },

    {
        id: 11,
        name: "Malteada Vainilla",
        category: "malteadas",
        categoryLabel: "Malteadas",
        price: 85,
        badge: "Clásica",

        
        image: "assets/img/malteada2.webp",

        description:
            "Helado de vainilla, leche, crema batida y esencia de vainilla.",

        options: [
            "Sin crema batida",
            "Poca azúcar",
            "Sin jarabe"
        ],

        extras: [
            {
                name: "Extra vainilla",
                price: 15
            },
            {
                name: "Extra crema batida",
                price: 12
            },
            {
                name: "Agregar galleta",
                price: 18
            }
        ]
    },


    /* CERVEZAS Y BEBIDAS */

    {
        id: 12,
        name: "Cerveza",
        category: "bebidas",
        categoryLabel: "Cervezas / Bebidas",
        price: 55,
        badge: "Fría",

        
        image: "assets/img/cerveza.webp",

        description:
            "Cerveza fría servida en botella o vaso según disponibilidad.",

        options: [
            "Con vaso",
            "Sin vaso"
        ],

        extras: []
    },

    {
        id: 13,
        name: "Limonada Mineral",
        category: "bebidas",
        categoryLabel: "Cervezas / Bebidas",
        price: 59,
        badge: "Refrescante",

        
        image: "assets/img/limonada1.webp",

        description:
            "Limón natural, agua mineral, hielo y un toque de jarabe.",

        options: [
            "Sin azúcar",
            "Poca azúcar",
            "Sin hielo"
        ],

        extras: [
            {
                name: "Extra limón",
                price: 8
            },
            {
                name: "Extra jarabe",
                price: 8
            }
        ]
    },


    /* POSTRES */

    {
        id: 14,
        name: "Brownie Rock",
        category: "postres",
        categoryLabel: "Postres",
        price: 79,
        badge: "Chocolate",

        
        image: "assets/img/brownie.webp",

        description:
            "Brownie tibio de chocolate con helado de vainilla y jarabe.",

        options: [
            "Sin helado",
            "Sin jarabe",
            "Jarabe aparte"
        ],

        extras: [
            {
                name: "Extra helado",
                price: 20
            },
            {
                name: "Extra chocolate",
                price: 15
            }
        ]
    },

    {
        id: 15,
        name: "Cheesecake",
        category: "postres",
        categoryLabel: "Postres",
        price: 85,
        badge: "Especialidad",

        
        image: "assets/img/cheesecake.webp",

        description:
            "Rebanada de cheesecake con base crujiente y salsa de frutos rojos.",

        options: [
            "Sin salsa",
            "Salsa aparte"
        ],

        extras: [
            {
                name: "Extra frutos rojos",
                price: 18
            },
            {
                name: "Extra salsa",
                price: 12
            }
        ]
    }

];


/* REFERENCIAS DEL DOM */

const productsGrid =
    document.querySelector("#productsGrid");

const filterButtons =
    document.querySelectorAll(".filter-button");

const productModal =
    document.querySelector("#productModal");

const modalProductImage =
    document.querySelector("#modalProductImage");

const modalProductName =
    document.querySelector("#modalProductName");

const modalProductDescription =
    document.querySelector("#modalProductDescription");

const modalProductPrice =
    document.querySelector("#modalProductPrice");

const regularOptions =
    document.querySelector("#regularOptions");

const extraOptions =
    document.querySelector("#extraOptions");

const productOptionsForm =
    document.querySelector("#productOptionsForm");

const productNotes =
    document.querySelector("#productNotes");

const modalQuantityElement =
    document.querySelector("#modalQuantity");

const modalButtonTotal =
    document.querySelector("#modalButtonTotal");

const decreaseModalQuantity =
    document.querySelector("#decreaseModalQuantity");

const increaseModalQuantity =
    document.querySelector("#increaseModalQuantity");

const cartSidebar =
    document.querySelector("#cartSidebar");

const cartOverlay =
    document.querySelector("#cartOverlay");

const cartItems =
    document.querySelector("#cartItems");

const emptyCart =
    document.querySelector("#emptyCart");

const cartSubtotal =
    document.querySelector("#cartSubtotal");

const cartCount =
    document.querySelector("#cartCount");

const sendWhatsAppButton =
    document.querySelector("#sendWhatsAppButton");

const toast =
    document.querySelector("#toast");

const mobileMenuButton =
    document.querySelector("#mobileMenuButton");

const navigation =
    document.querySelector("#navigation");


/* ESTADO DE LA APLICACIÓN */

let currentProduct = null;

let modalQuantity = 1;

let cart = loadCart();


/* UTILIDADES */

function formatCurrency(value) {
    return new Intl.NumberFormat(
        "es-MX",
        {
            style: "currency",
            currency: "MXN"
        }
    ).format(value);
}


function createUniqueId() {
    return `${Date.now()}-${Math.random()
        .toString(16)
        .slice(2)}`;
}


function saveCart() {
    localStorage.setItem(
        "garageRockCart",
        JSON.stringify(cart)
    );
}


function loadCart() {
    try {
        const savedCart =
            localStorage.getItem("garageRockCart");

        return savedCart
            ? JSON.parse(savedCart)
            : [];
    } catch (error) {
        console.error(
            "No fue posible recuperar el carrito:",
            error
        );

        return [];
    }
}


function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(showToast.timeout);

    showToast.timeout = window.setTimeout(
        () => {
            toast.classList.remove("is-visible");
        },
        2400
    );
}


/* RENDER DEL MENÚ */

function createProductCard(product, index) {
    const card = document.createElement("article");

    card.className =
        "product-card is-appearing";

    card.dataset.category =
        product.category;

    card.style.animationDelay =
        `${(index % 3) * 70}ms`;

    card.innerHTML = `
        <div class="product-card__image-wrapper">

            <!-- REEMPLAZA ESTA RUTA POR TU IMAGEN LOCAL EN EL ARREGLO products DE script.js -->
            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-card__image"
                loading="lazy"
                decoding="async"
            >

            <span class="product-card__badge">
                ${product.badge}
            </span>

        </div>

        <div class="product-card__content">

            <span class="product-card__category">
                ${product.categoryLabel}
            </span>

            <div class="product-card__heading">

                <h3>${product.name}</h3>

                <span class="product-card__price">
                    ${formatCurrency(product.price)}
                </span>

            </div>

            <p class="product-card__description">
                ${product.description}
            </p>

            <button
                type="button"
                class="product-card__button"
                data-product-id="${product.id}"
            >
                Personalizar

                <span aria-hidden="true">
                    ↗
                </span>
            </button>

        </div>
    `;

    return card;
}


function renderProducts(category = "todos") {
    productsGrid.innerHTML = "";

    const filteredProducts =
        category === "todos"
            ? products
            : products.filter(
                (product) =>
                    product.category === category
            );

    filteredProducts.forEach(
        (product, index) => {
            productsGrid.append(
                createProductCard(product, index)
            );
        }
    );
}


/* FILTROS DEL MENÚ */

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category =
            button.dataset.category;

        filterButtons.forEach(
            (currentButton) => {
                currentButton.classList.remove(
                    "active"
                );
            }
        );

        button.classList.add("active");

        renderProducts(category);
    });
});


/* ABRIR PERSONALIZACIÓN */

productsGrid.addEventListener(
    "click",
    (event) => {
        const button =
            event.target.closest(
                "[data-product-id]"
            );

        if (!button) {
            return;
        }

        const productId =
            Number(button.dataset.productId);

        const selectedProduct =
            products.find(
                (product) =>
                    product.id === productId
            );

        if (!selectedProduct) {
            return;
        }

        openProductModal(selectedProduct);
    }
);


function openProductModal(product) {
    currentProduct = product;
    modalQuantity = 1;

    modalProductImage.src =
        product.image;

    modalProductImage.alt =
        product.name;

    modalProductName.textContent =
        product.name;

    modalProductDescription.textContent =
        product.description;

    modalProductPrice.textContent =
        formatCurrency(product.price);

    modalQuantityElement.textContent =
        modalQuantity;

    productNotes.value = "";

    renderRegularOptions(product.options);

    renderExtraOptions(product.extras);

    updateModalTotal();

    productModal.classList.add("is-open");

    productModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("no-scroll");
}


function closeProductModal() {
    productModal.classList.remove("is-open");

    productModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("no-scroll");

    currentProduct = null;
}


/* OPCIONES DE PERSONALIZACIÓN */

function renderRegularOptions(options) {
    regularOptions.innerHTML = "";

    if (!options.length) {
        regularOptions.innerHTML = `
            <p class="no-options">
                Este producto no tiene modificaciones disponibles.
            </p>
        `;

        return;
    }

    options.forEach((option, index) => {
        const label =
            document.createElement("label");

        label.className =
            "option-label";

        label.innerHTML = `
            <span>${option}</span>

            <input
                type="checkbox"
                name="regularOption"
                value="${option}"
                id="regular-option-${index}"
            >
        `;

        regularOptions.append(label);
    });
}


function renderExtraOptions(extras) {
    extraOptions.innerHTML = "";

    if (!extras.length) {
        extraOptions.innerHTML = `
            <p class="no-options">
                Este producto no tiene extras disponibles.
            </p>
        `;

        return;
    }

    extras.forEach((extra, index) => {
        const label =
            document.createElement("label");

        label.className =
            "option-label";

        label.innerHTML = `
            <span>${extra.name}</span>

            <strong>
                +${formatCurrency(extra.price)}
            </strong>

            <input
                type="checkbox"
                name="extraOption"
                value="${extra.name}"
                data-price="${extra.price}"
                id="extra-option-${index}"
            >
        `;

        extraOptions.append(label);
    });
}


productOptionsForm.addEventListener(
    "change",
    updateModalTotal
);


/* CANTIDAD DENTRO DEL MODAL */

decreaseModalQuantity.addEventListener(
    "click",
    () => {
        modalQuantity = Math.max(
            1,
            modalQuantity - 1
        );

        modalQuantityElement.textContent =
            modalQuantity;

        updateModalTotal();
    }
);


increaseModalQuantity.addEventListener(
    "click",
    () => {
        modalQuantity += 1;

        modalQuantityElement.textContent =
            modalQuantity;

        updateModalTotal();
    }
);


function getSelectedExtras() {
    return Array.from(
        document.querySelectorAll(
            'input[name="extraOption"]:checked'
        )
    ).map((input) => ({
        name: input.value,
        price: Number(input.dataset.price)
    }));
}


function calculateCurrentUnitPrice() {
    if (!currentProduct) {
        return 0;
    }

    const extrasTotal =
        getSelectedExtras().reduce(
            (total, extra) =>
                total + extra.price,
            0
        );

    return currentProduct.price + extrasTotal;
}


function updateModalTotal() {
    const total =
        calculateCurrentUnitPrice() *
        modalQuantity;

    modalButtonTotal.textContent =
        formatCurrency(total);
}


/* AGREGAR AL CARRITO */

productOptionsForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        if (!currentProduct) {
            return;
        }

        const selectedOptions =
            Array.from(
                document.querySelectorAll(
                    'input[name="regularOption"]:checked'
                )
            ).map((input) => input.value);

        const selectedExtras =
            getSelectedExtras();

        const unitPrice =
            calculateCurrentUnitPrice();

        const cartItem = {
            cartId: createUniqueId(),

            productId:
                currentProduct.id,

            name:
                currentProduct.name,

            image:
                currentProduct.image,

            basePrice:
                currentProduct.price,

            unitPrice,

            quantity:
                modalQuantity,

            options:
                selectedOptions,

            extras:
                selectedExtras,

            notes:
                productNotes.value.trim()
        };

        cart.push(cartItem);

        saveCart();
        renderCart();
        animateCartCount();

        closeProductModal();

        showToast(
            `${currentProduct.name} agregado al carrito`
        );
    }
);


/* RENDER DEL CARRITO */

function renderCart() {
    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    const subtotal =
        cart.reduce(
            (total, item) =>
                total +
                item.unitPrice *
                item.quantity,
            0
        );

    cartCount.textContent =
        totalQuantity;

    cartSubtotal.textContent =
        formatCurrency(subtotal);

    sendWhatsAppButton.disabled =
        cart.length === 0;

    emptyCart.hidden =
        cart.length > 0;

    cartItems
        .querySelectorAll(".cart-item")
        .forEach((item) => {
            item.remove();
        });

    cart.forEach((item) => {
        cartItems.append(
            createCartItem(item)
        );
    });
}


function createCartItem(item) {
    const article =
        document.createElement("article");

    article.className =
        "cart-item";

    article.dataset.cartId =
        item.cartId;

    const optionsText =
        buildItemSpecifications(item);

    article.innerHTML = `
        <!-- REEMPLAZA ESTA RUTA POR TU IMAGEN LOCAL EN EL ARREGLO products DE script.js -->
        <img
            src="${item.image}"
            alt="${item.name}"
            class="cart-item__image"
        >

        <div class="cart-item__content">

            <h3>${item.name}</h3>

            ${
                optionsText
                    ? `
                        <p class="cart-item__options">
                            ${optionsText}
                        </p>
                    `
                    : ""
            }

            ${
                item.notes
                    ? `
                        <p class="cart-item__notes">
                            Nota: ${item.notes}
                        </p>
                    `
                    : ""
            }

            <span class="cart-item__price">
                ${formatCurrency(
                    item.unitPrice *
                    item.quantity
                )}
            </span>

        </div>

        <div class="cart-item__actions">

            <button
                type="button"
                data-cart-action="increase"
                aria-label="Aumentar cantidad"
            >
                +
            </button>

            <span class="cart-item__quantity">
                ${item.quantity}
            </span>

            <button
                type="button"
                data-cart-action="decrease"
                aria-label="Disminuir cantidad"
            >
                −
            </button>

            <button
                type="button"
                class="cart-item__remove"
                data-cart-action="remove"
                aria-label="Eliminar producto"
            >
                ×
            </button>

        </div>
    `;

    return article;
}


function buildItemSpecifications(item) {
    const specifications = [
        ...item.options,
        ...item.extras.map(
            (extra) => extra.name
        )
    ];

    return specifications.join(", ");
}


/* MODIFICAR CARRITO LATERAL */

cartItems.addEventListener(
    "click",
    (event) => {
        const actionButton =
            event.target.closest(
                "[data-cart-action]"
            );

        if (!actionButton) {
            return;
        }

        const cartItemElement =
            actionButton.closest(".cart-item");

        if (!cartItemElement) {
            return;
        }

        const cartId =
            cartItemElement.dataset.cartId;

        const action =
            actionButton.dataset.cartAction;

        updateCartItem(cartId, action);
    }
);


function updateCartItem(cartId, action) {
    const item =
        cart.find(
            (currentItem) =>
                currentItem.cartId === cartId
        );

    if (!item) {
        return;
    }

    if (action === "increase") {
        item.quantity += 1;
    }

    if (action === "decrease") {
        item.quantity -= 1;

        if (item.quantity <= 0) {
            cart = cart.filter(
                (currentItem) =>
                    currentItem.cartId !== cartId
            );
        }
    }

    if (action === "remove") {
        cart = cart.filter(
            (currentItem) =>
                currentItem.cartId !== cartId
        );

        showToast(
            `${item.name} eliminado del carrito`
        );
    }

    saveCart();
    renderCart();
}


/* ABRIR Y CERRAR CARRITO */

function openCart() {
    cartSidebar.classList.add("is-open");
    cartOverlay.classList.add("is-open");

    cartSidebar.setAttribute(
        "aria-hidden",
        "false"
    );

    cartOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("no-scroll");
}


function closeCart() {
    cartSidebar.classList.remove("is-open");
    cartOverlay.classList.remove("is-open");

    cartSidebar.setAttribute(
        "aria-hidden",
        "true"
    );

    cartOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("no-scroll");
}


document
    .querySelectorAll(
        "#headerCartButton, " +
        "#heroCartButton, " +
        "#contactCartButton"
    )
    .forEach((button) => {
        button.addEventListener(
            "click",
            openCart
        );
    });


document
    .querySelector("#closeCartButton")
    .addEventListener(
        "click",
        closeCart
    );


cartOverlay.addEventListener(
    "click",
    closeCart
);


/* WHATSAPP DEL PEDIDO */

sendWhatsAppButton.addEventListener(
    "click",
    () => {
        if (!cart.length) {
            return;
        }

        if (
            !WHATSAPP_NUMBER ||
            WHATSAPP_NUMBER === "TU_NUMERO"
        ) {
            window.alert(
                "Debes reemplazar TU_NUMERO en script.js por el número real de WhatsApp."
            );

            return;
        }

        const message =
            createWhatsAppMessage();

        const whatsappUrl =
            `https://wa.me/${WHATSAPP_NUMBER}` +
            `?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );
    }
);


function createWhatsAppMessage() {
    const lines = [
        "¡Hola! Quisiera realizar el siguiente pedido:",
        ""
    ];

    cart.forEach((item) => {
        const specifications =
            buildItemSpecifications(item);

        let productLine =
            `- ${item.quantity}x ${item.name}`;

        if (specifications) {
            productLine +=
                ` (${specifications})`;
        }

        lines.push(productLine);

        if (item.notes) {
            lines.push(
                `  Nota: ${item.notes}`
            );
        }

        lines.push(
            `  Importe: ${formatCurrency(
                item.unitPrice *
                item.quantity
            )}`
        );

        lines.push("");
    });

    const total =
        cart.reduce(
            (subtotal, item) =>
                subtotal +
                item.unitPrice *
                item.quantity,
            0
        );

    lines.push(
        `Total: ${formatCurrency(total)}`
    );

    lines.push("");

    lines.push(
        "¿Me pueden confirmar disponibilidad y tiempo de entrega?"
    );

    return lines.join("\n");
}


/* CERRAR EL MODAL */

document
    .querySelectorAll("[data-close-modal]")
    .forEach((element) => {
        element.addEventListener(
            "click",
            closeProductModal
        );
    });


document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            productModal.classList.contains(
                "is-open"
            )
        ) {
            closeProductModal();
        }

        if (
            event.key === "Escape" &&
            cartSidebar.classList.contains(
                "is-open"
            )
        ) {
            closeCart();
        }
    }
);


/* ANIMACIÓN DEL CONTADOR */

function animateCartCount() {
    cartCount.classList.remove("bump");

    void cartCount.offsetWidth;

    cartCount.classList.add("bump");
}


/* MENÚ PARA CELULAR */

mobileMenuButton.addEventListener(
    "click",
    () => {
        const isOpen =
            navigation.classList.toggle(
                "is-open"
            );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    }
);


navigation
    .querySelectorAll("a")
    .forEach((link) => {
        link.addEventListener(
            "click",
            () => {
                navigation.classList.remove(
                    "is-open"
                );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        );
    });


/* INICIALIZACIÓN */

renderProducts();

renderCart();