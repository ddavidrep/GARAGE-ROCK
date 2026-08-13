"use strict";


/* CONFIGURACIÓN GENERAL */



const WHATSAPP_NUMBER = "525610791508";

/*
HORARIOS DEL MENÚ
-----------------
Estos horarios son PROVISIONALES porque todavía no me diste los horarios reales.
Cámbialos aquí y no tendrás que tocar ninguna otra parte del código.

Desayunos: 08:00 a 13:00
Comida:    13:00 a 23:00
*/
const MENU_SCHEDULE = {
    desayuno: {
        start: "08:00",
        end: "13:00",
        label: "Desayunos"
    },
    comida: {
        start: "13:00",
        end: "23:00",
        label: "Comida"
    }
};



/* ESTADO VISUAL DEL RESTAURANTE */

function minutesFromTimeString(timeString) {
    const [hours, minutes] =
        timeString.split(":").map(Number);

    return hours * 60 + minutes;
}


function getCurrentMinutes() {
    const now = new Date();

    return now.getHours() * 60 +
        now.getMinutes();
}


function formatHourLabel(timeString) {
    const [hours, minutes] =
        timeString.split(":").map(Number);

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    return new Intl.DateTimeFormat(
        "es-MX",
        {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }
    ).format(date);
}


function getRestaurantOpenState() {
    const currentMinutes =
        getCurrentMinutes();

    const breakfastStart =
        minutesFromTimeString(
            MENU_SCHEDULE.desayuno.start
        );

    const breakfastEnd =
        minutesFromTimeString(
            MENU_SCHEDULE.desayuno.end
        );

    const foodStart =
        minutesFromTimeString(
            MENU_SCHEDULE.comida.start
        );

    const foodEnd =
        minutesFromTimeString(
            MENU_SCHEDULE.comida.end
        );

    if (
        currentMinutes >= breakfastStart &&
        currentMinutes < breakfastEnd
    ) {
        return {
            isOpen: true,
            period: "desayuno",
            closesAt:
                MENU_SCHEDULE.desayuno.end
        };
    }

    if (
        currentMinutes >= foodStart &&
        currentMinutes < foodEnd
    ) {
        return {
            isOpen: true,
            period: "comida",
            closesAt:
                MENU_SCHEDULE.comida.end
        };
    }

    return {
        isOpen: false,
        period: null,
        opensAt:
            MENU_SCHEDULE.desayuno.start
    };
}


function updateRestaurantHoursCard() {
    if (!restaurantHoursCard) {
        return;
    }

    const state =
        getRestaurantOpenState();

    const breakfastStartLabel =
        formatHourLabel(
            MENU_SCHEDULE.desayuno.start
        );

    const breakfastEndLabel =
        formatHourLabel(
            MENU_SCHEDULE.desayuno.end
        );

    const foodStartLabel =
        formatHourLabel(
            MENU_SCHEDULE.comida.start
        );

    const foodEndLabel =
        formatHourLabel(
            MENU_SCHEDULE.comida.end
        );

    if (breakfastHoursText) {
        breakfastHoursText.textContent =
            `${breakfastStartLabel} – ${breakfastEndLabel}`;
    }

    if (foodHoursText) {
        foodHoursText.textContent =
            `${foodStartLabel} – ${foodEndLabel}`;
    }

    restaurantHoursCard.classList.toggle(
        "is-open",
        state.isOpen
    );

    restaurantHoursCard.classList.toggle(
        "is-closed",
        !state.isOpen
    );

    if (restaurantStatusDot) {
        restaurantStatusDot.classList.toggle(
            "is-open",
            state.isOpen
        );

        restaurantStatusDot.classList.toggle(
            "is-closed",
            !state.isOpen
        );
    }

    if (state.isOpen) {
        const activeLabel =
            state.period === "desayuno"
                ? "Desayunos disponibles"
                : "Comida disponible";

        restaurantStatusLabel.textContent =
            "ABIERTO AHORA";

        restaurantStatusHeadline.textContent =
            activeLabel;

        restaurantStatusMessage.textContent =
            `Puedes ordenar hasta las ${
                formatHourLabel(
                    state.closesAt
                )
            }.`;

        return;
    }

    restaurantStatusLabel.textContent =
        "CERRADO AHORA";

    restaurantStatusHeadline.textContent =
        "Pedidos fuera de horario";

    restaurantStatusMessage.textContent =
        `Volvemos a recibir pedidos a las ${
            formatHourLabel(
                state.opensAt
            )
        }.`;
}


/* BASE DE DATOS DEL MENÚ */

const products = [


    /* DESAYUNOS */

    {
        id: 16,
        name: "Chilaquiles Garage",
        category: "desayunos",
        categoryLabel: "Desayunos",
        mealPeriod: "desayuno",
        available: true,
        price: 105,
        badge: "Favorito",
        // IMAGEN PROVISIONAL: REEMPLAZA POR UNA FOTO REAL DE CHILAQUILES
        image: "assets/img/hero2.webp",
        description: "Totopos crujientes con salsa roja o verde, crema, queso y cebolla.",
        options: [
            "Salsa roja",
            "Salsa verde",
            "Sin cebolla",
            "Sin crema"
        ],
        extras: [
            { name: "Huevo extra", price: 20 },
            { name: "Pollo", price: 30 },
            { name: "Aguacate", price: 25 }
        ]
    },

    {
        id: 17,
        name: "Molletes Rock",
        category: "desayunos",
        categoryLabel: "Desayunos",
        mealPeriod: "desayuno",
        available: true,
        price: 85,
        badge: "Clásicos",
        // IMAGEN PROVISIONAL: REEMPLAZA POR UNA FOTO REAL DE MOLLETES
        image: "assets/img/hero2.webp",
        description: "Pan dorado con frijoles, queso gratinado y pico de gallo.",
        options: [
            "Sin pico de gallo",
            "Pico de gallo aparte",
            "Sin frijoles"
        ],
        extras: [
            { name: "Chorizo", price: 25 },
            { name: "Tocino", price: 25 },
            { name: "Aguacate", price: 25 }
        ]
    },

    {
        id: 18,
        name: "Huevos Motor",
        category: "desayunos",
        categoryLabel: "Desayunos",
        mealPeriod: "desayuno",
        available: true,
        price: 95,
        badge: "Al gusto",
        // IMAGEN PROVISIONAL: REEMPLAZA POR UNA FOTO REAL DE HUEVOS
        image: "assets/img/hero2.webp",
        description: "Dos huevos al gusto acompañados de frijoles y pan tostado.",
        options: [
            "Revueltos",
            "Estrellados",
            "Sin frijoles",
            "Pan aparte"
        ],
        extras: [
            { name: "Jamón", price: 20 },
            { name: "Tocino", price: 25 },
            { name: "Chorizo", price: 25 }
        ]
    },

    {
        id: 19,
        name: "Hotcakes Amplificador",
        category: "desayunos",
        categoryLabel: "Desayunos",
        mealPeriod: "desayuno",
        available: true,
        price: 99,
        badge: "Dulces",
        // IMAGEN PROVISIONAL: REEMPLAZA POR UNA FOTO REAL DE HOTCAKES
        image: "assets/img/hero2.webp",
        description: "Tres hotcakes esponjosos con mantequilla, miel y fruta de temporada.",
        options: [
            "Sin mantequilla",
            "Miel aparte",
            "Sin fruta"
        ],
        extras: [
            { name: "Nutella", price: 25 },
            { name: "Plátano", price: 18 },
            { name: "Tocino", price: 25 }
        ]
    },

    {
        id: 20,
        name: "Croissant Garage",
        category: "desayunos",
        categoryLabel: "Desayunos",
        mealPeriod: "desayuno",
        available: true,
        price: 92,
        badge: "Nuevo",
        // IMAGEN PROVISIONAL: REEMPLAZA POR UNA FOTO REAL DE CROISSANT
        image: "assets/img/hero2.webp",
        description: "Croissant caliente con jamón, queso, huevo y aderezo de la casa.",
        options: [
            "Sin jamón",
            "Sin huevo",
            "Sin aderezo",
            "Aderezo aparte"
        ],
        extras: [
            { name: "Tocino", price: 25 },
            { name: "Extra queso", price: 20 },
            { name: "Aguacate", price: 25 }
        ]
    },

    {
        id: 21,
        name: "Café del Taller",
        category: "desayunos",
        categoryLabel: "Desayunos",
        mealPeriod: "desayuno",
        available: true,
        price: 45,
        badge: "Caliente",
        // IMAGEN PROVISIONAL: REEMPLAZA POR UNA FOTO REAL DE CAFÉ
        image: "assets/img/hero2.webp",
        description: "Café americano recién preparado para arrancar el motor.",
        options: [
            "Sin azúcar",
            "Azúcar aparte"
        ],
        extras: [
            { name: "Leche", price: 10 },
            { name: "Shot extra", price: 18 }
        ]
    },
    /* HAMBURGUESAS */

    {
        id: 1,
        name: "Hamburguesa Rocker",
        category: "hamburguesas",
        categoryLabel: "Hamburguesas",
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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
        mealPeriod: "comida",
        available: true,
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

const modalSubmitLabel =
    document.querySelector("#modalSubmitLabel");

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

const cartSummary =
    document.querySelector("#cartSummary");

const checkoutToggle =
    document.querySelector("#checkoutToggle");

const checkoutContent =
    document.querySelector("#checkoutContent");

const checkoutToggleArrow =
    document.querySelector("#checkoutToggleArrow");

const checkoutToggleText =
    document.querySelector("#checkoutToggleText");

const toast =
    document.querySelector("#toast");

const mobileMenuButton =
    document.querySelector("#mobileMenuButton");

const navigation =
    document.querySelector("#navigation");

const menuFilters =
    document.querySelector("#menuFilters");

const mealPeriodButtons =
    document.querySelectorAll("[data-meal-period]");

const menuScheduleStatus =
    document.querySelector("#menuScheduleStatus");


const restaurantHoursCard =
    document.querySelector("#restaurantHoursCard");

const restaurantStatusDot =
    document.querySelector("#restaurantStatusDot");

const restaurantStatusLabel =
    document.querySelector("#restaurantStatusLabel");

const restaurantStatusHeadline =
    document.querySelector("#restaurantStatusHeadline");

const restaurantStatusMessage =
    document.querySelector("#restaurantStatusMessage");

const breakfastHoursText =
    document.querySelector("#breakfastHoursText");

const foodHoursText =
    document.querySelector("#foodHoursText");

const floatingCartButton =
    document.querySelector("#floatingCartButton");

const floatingCartCount =
    document.querySelector("#floatingCartCount");

const floatingCartTotal =
    document.querySelector("#floatingCartTotal");

const tableField =
    document.querySelector("#tableField");

const customerNameField =
    document.querySelector("#customerNameField");

const customerName =
    document.querySelector("#customerName");

const addressField =
    document.querySelector("#addressField");

const deliveryAddress =
    document.querySelector("#deliveryAddress");

const referencesField =
    document.querySelector("#referencesField");

const deliveryReferences =
    document.querySelector("#deliveryReferences");

const orderNotes =
    document.querySelector("#orderNotes");

const cashPaymentOption =
    document.querySelector("#cashPaymentOption");

const deliveryPaymentNotice =
    document.querySelector("#deliveryPaymentNotice");

const bankDetails =
    document.querySelector("#bankDetails");


/* ESTADO DE LA APLICACIÓN */

let currentProduct = null;

let editingCartId = null;

let modalQuantity = 1;

let cart = loadCart();

let currentCategory = "todos";

let currentMealPeriod =
    getCurrentServicePeriod() || "comida";

let lastDetectedServicePeriod =
    getCurrentServicePeriod();


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


/* HORARIOS Y DISPONIBILIDAD DEL MENÚ */

function timeToMinutes(time) {
    const [hours, minutes] =
        time.split(":").map(Number);

    return hours * 60 + minutes;
}


function isTimeInsideRange(currentMinutes, start, end) {
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(end);

    if (startMinutes <= endMinutes) {
        return (
            currentMinutes >= startMinutes &&
            currentMinutes < endMinutes
        );
    }

    return (
        currentMinutes >= startMinutes ||
        currentMinutes < endMinutes
    );
}


function getCurrentServicePeriod() {
    const now = new Date();

    const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();

    if (
        isTimeInsideRange(
            currentMinutes,
            MENU_SCHEDULE.desayuno.start,
            MENU_SCHEDULE.desayuno.end
        )
    ) {
        return "desayuno";
    }

    if (
        isTimeInsideRange(
            currentMinutes,
            MENU_SCHEDULE.comida.start,
            MENU_SCHEDULE.comida.end
        )
    ) {
        return "comida";
    }

    return null;
}


function getPeriodAvailabilityText(period) {
    const schedule =
        MENU_SCHEDULE[period];

    return `${schedule.start}–${schedule.end}`;
}


function isProductOrderable(product) {
    return (
        product.available !== false &&
        getCurrentServicePeriod() ===
            product.mealPeriod
    );
}


function getProductAvailabilityLabel(product) {
    if (product.available === false) {
        return "Agotado";
    }

    const currentPeriod =
        getCurrentServicePeriod();

    if (!currentPeriod) {
        return "Fuera de horario";
    }

    if (
        currentPeriod !==
        product.mealPeriod
    ) {
        return `Disponible ${getPeriodAvailabilityText(product.mealPeriod)}`;
    }

    return "";
}


function updateScheduleInterface() {
    const activePeriod =
        getCurrentServicePeriod();

    mealPeriodButtons.forEach(
        (button) => {
            const period =
                button.dataset.mealPeriod;

            button.classList.toggle(
                "active",
                period === currentMealPeriod
            );

            button.classList.toggle(
                "is-orderable",
                period === activePeriod
            );
        }
    );

    if (!activePeriod) {
        menuScheduleStatus.innerHTML = `
            <strong>Pedidos cerrados por el momento.</strong>
            Desayunos ${getPeriodAvailabilityText("desayuno")} ·
            Comida ${getPeriodAvailabilityText("comida")}.
        `;
    } else if (activePeriod === "desayuno") {
        menuScheduleStatus.innerHTML = `
            <strong>Turno de desayunos activo.</strong>
            La comida estará disponible de
            ${getPeriodAvailabilityText("comida")}.
        `;
    } else {
        menuScheduleStatus.innerHTML = `
            <strong>Turno de comida activo.</strong>
            Los desayunos se sirven de
            ${getPeriodAvailabilityText("desayuno")}.
        `;
    }

    menuFilters.hidden =
        currentMealPeriod === "desayuno";
}


/* RENDER DEL MENÚ */

function createProductCard(product, index) {
    const card = document.createElement("article");

    const orderable =
        isProductOrderable(product);

    const unavailableLabel =
        getProductAvailabilityLabel(product);

    card.className =
        "product-card is-appearing";

    if (!orderable) {
        card.classList.add(
            "product-card--unavailable"
        );
    }

    card.dataset.category =
        product.category;

    card.style.animationDelay =
        `${(index % 3) * 70}ms`;

    card.innerHTML = `
        <div class="product-card__image-wrapper">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-card__image"
                loading="lazy"
                decoding="async"
            >

            <span class="product-card__badge">
                ${orderable ? product.badge : unavailableLabel}
            </span>

            ${
                !orderable
                    ? `
                        <div class="product-card__unavailable-overlay">
                            <strong>${unavailableLabel}</strong>
                        </div>
                    `
                    : ""
            }

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
                ${orderable ? "" : "disabled"}
            >
                ${orderable ? "Personalizar" : unavailableLabel}

                <span aria-hidden="true">
                    ${orderable ? "↗" : "×"}
                </span>
            </button>

        </div>
    `;

    return card;
}


function renderProducts(category = currentCategory) {
    currentCategory = category;

    productsGrid.innerHTML = "";

    const periodProducts =
        products.filter(
            (product) =>
                product.mealPeriod ===
                currentMealPeriod
        );

    const filteredProducts =
        category === "todos"
            ? periodProducts
            : periodProducts.filter(
                (product) =>
                    product.category ===
                    category
            );

    if (!filteredProducts.length) {
        productsGrid.innerHTML = `
            <div class="menu-empty-state">
                <span>⚙️</span>
                <h3>
                    ${
                        "No hay productos disponibles"
                    }
                </h3>
                <p>
                    ${
                        "Prueba con otro turno o categoría del menú."
                    }
                </p>
            </div>
        `;

        return;
    }

    filteredProducts.forEach(
        (product, index) => {
            productsGrid.append(
                createProductCard(
                    product,
                    index
                )
            );
        }
    );
}


/* FILTROS DEL MENÚ */

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category =
            button.dataset.category;

        currentCategory = category;

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


mealPeriodButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentMealPeriod =
            button.dataset.mealPeriod;

        currentCategory = "todos";

        filterButtons.forEach(
            (currentButton) => {
                currentButton.classList.toggle(
                    "active",
                    currentButton.dataset.category ===
                        "todos"
                );
            }
        );

        updateScheduleInterface();
        renderProducts();
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


function openProductModal(product, cartItem = null) {
    if (!cartItem && !isProductOrderable(product)) {
        showToast(
            getProductAvailabilityLabel(product)
        );
        return;
    }

    currentProduct = product;
    editingCartId =
        cartItem?.cartId || null;

    modalQuantity =
        cartItem?.quantity || 1;

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

    productNotes.value =
        cartItem?.notes || "";

    renderRegularOptions(product.options);

    renderExtraOptions(product.extras);

    if (cartItem) {
        const selectedOptions =
            new Set(cartItem.options || []);

        regularOptions
            .querySelectorAll(
                'input[name="regularOption"]'
            )
            .forEach((input) => {
                input.checked =
                    selectedOptions.has(
                        input.value
                    );
            });

        const selectedExtras =
            new Set(
                (cartItem.extras || [])
                    .map((extra) => extra.name)
            );

        extraOptions
            .querySelectorAll(
                'input[name="extraOption"]'
            )
            .forEach((input) => {
                input.checked =
                    selectedExtras.has(
                        input.value
                    );
            });
    }

    modalSubmitLabel.textContent =
        cartItem
            ? "Guardar cambios"
            : "Agregar al carrito";

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
    editingCartId = null;

    modalSubmitLabel.textContent =
        "Agregar al carrito";
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


/* AGREGAR O EDITAR PRODUCTO DEL CARRITO */

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

        const cartItemData = {
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

        const productName =
            currentProduct.name;

        if (editingCartId) {
            const itemIndex =
                cart.findIndex(
                    (item) =>
                        item.cartId ===
                        editingCartId
                );

            if (itemIndex !== -1) {
                cart[itemIndex] = {
                    ...cartItemData,
                    cartId: editingCartId
                };
            }

            saveCart();
            renderCart();
            animateCartCount();

            closeProductModal();

            showToast(
                `${productName} actualizado`
            );

            return;
        }

        cart.push({
            ...cartItemData,
            cartId: createUniqueId()
        });

        saveCart();
        renderCart();
        animateCartCount();
        animateFloatingCart();

        closeProductModal();

        showToast(
            `${productName} agregado al carrito`
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

    floatingCartButton.hidden =
        cart.length === 0;

    floatingCartCount.textContent =
        `${totalQuantity} ${
            totalQuantity === 1
                ? "producto"
                : "productos"
        }`;

    floatingCartTotal.textContent =
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
        <img
            src="${item.image}"
            alt="${item.name}"
            class="cart-item__image"
        >

        <div class="cart-item__content">

            <div class="cart-item__heading">
                <h3>${item.name}</h3>

                <span class="cart-item__price">
                    ${formatCurrency(
                        item.unitPrice *
                        item.quantity
                    )}
                </span>
            </div>

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

        </div>

        <div class="cart-item__footer">

            <div
                class="cart-item__quantity-controls"
                aria-label="Cantidad"
            >
                <button
                    type="button"
                    data-cart-action="decrease"
                    aria-label="Disminuir cantidad"
                >
                    −
                </button>

                <span class="cart-item__quantity">
                    ${item.quantity}
                </span>

                <button
                    type="button"
                    data-cart-action="increase"
                    aria-label="Aumentar cantidad"
                >
                    +
                </button>
            </div>

            <div class="cart-item__secondary-actions">

                <button
                    type="button"
                    class="cart-item__edit"
                    data-cart-action="edit"
                    aria-label="Editar ${item.name}"
                >
                    Editar
                </button>

                <button
                    type="button"
                    class="cart-item__remove"
                    data-cart-action="remove"
                    aria-label="Eliminar ${item.name}"
                >
                    Eliminar
                </button>

            </div>

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

    if (action === "edit") {
        const product =
            products.find(
                (currentProduct) =>
                    currentProduct.id ===
                    item.productId
            );

        if (!product) {
            showToast(
                "No fue posible editar este producto"
            );
            return;
        }

        closeCart();
        openProductModal(product, item);

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



/* CHECKOUT PLEGABLE DEL CARRITO */

function setCheckoutCollapsed(collapsed) {
    if (
        !cartSummary ||
        !checkoutToggle ||
        !checkoutContent
    ) {
        return;
    }

    cartSummary.classList.toggle(
        "is-collapsed",
        collapsed
    );

    checkoutContent.classList.toggle(
        "is-collapsed",
        collapsed
    );

    checkoutToggle.classList.toggle(
        "is-collapsed",
        collapsed
    );

    checkoutToggle.setAttribute(
        "aria-expanded",
        String(!collapsed)
    );

    checkoutToggle.setAttribute(
        "aria-label",
        collapsed
            ? "Mostrar opciones para finalizar pedido"
            : "Ocultar opciones para revisar el carrito"
    );

    if (checkoutToggleArrow) {
        checkoutToggleArrow.textContent =
            collapsed ? "↑" : "↓";
    }

    if (checkoutToggleText) {
        checkoutToggleText.textContent =
            collapsed
                ? "Finalizar pedido"
                : "Ocultar opciones";
    }
}


checkoutToggle?.addEventListener(
    "click",
    () => {
        const isCollapsed =
            checkoutContent.classList.contains(
                "is-collapsed"
            );

        setCheckoutCollapsed(!isCollapsed);
    }
);


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

    /*
    En móvil priorizamos ver los productos.
    Si ya hay 2 o más, el checkout abre plegado.
    En tablet/PC conserva el último estado manual.
    */
    if (
        window.matchMedia(
            "(max-width: 720px)"
        ).matches &&
        cart.length >= 2
    ) {
        setCheckoutCollapsed(true);
    }
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


floatingCartButton.addEventListener(
    "click",
    openCart
);


function animateFloatingCart() {
    floatingCartButton.classList.remove(
        "is-bumping"
    );

    void floatingCartButton.offsetWidth;

    floatingCartButton.classList.add(
        "is-bumping"
    );
}


/* CHECKOUT: ENTREGA Y MÉTODO DE PAGO */

function getSelectedFulfillment() {
    return document.querySelector(
        'input[name="fulfillmentType"]:checked'
    )?.value || "local";
}


function getSelectedPaymentMethod() {
    return document.querySelector(
        'input[name="paymentMethod"]:checked'
    )?.value || "";
}


function updateCheckoutFields() {
    const fulfillment =
        getSelectedFulfillment();

    tableField.hidden =
        fulfillment !== "local";

    customerNameField.hidden =
        fulfillment === "local";

    addressField.hidden =
        fulfillment !== "domicilio";

    referencesField.hidden =
        fulfillment !== "domicilio";

    const cashInput =
        document.querySelector(
            'input[name="paymentMethod"][value="efectivo"]'
        );

    const transferInput =
        document.querySelector(
            'input[name="paymentMethod"][value="transferencia"]'
        );

    const isDelivery =
        fulfillment === "domicilio";

    cashInput.disabled =
        isDelivery;

    cashPaymentOption.classList.toggle(
        "is-disabled",
        isDelivery
    );

    deliveryPaymentNotice.hidden =
        !isDelivery;

    if (isDelivery) {
        transferInput.checked = true;
        cashInput.checked = false;
    }

    updateBankDetails();
}


function updateBankDetails() {
    bankDetails.hidden =
        getSelectedPaymentMethod() !==
        "transferencia";
}


document
    .querySelectorAll(
        'input[name="fulfillmentType"]'
    )
    .forEach((input) => {
        input.addEventListener(
            "change",
            updateCheckoutFields
        );
    });


document
    .querySelectorAll(
        'input[name="paymentMethod"]'
    )
    .forEach((input) => {
        input.addEventListener(
            "change",
            updateBankDetails
        );
    });


function validateCheckout() {
    const fulfillment =
        getSelectedFulfillment();

    if (fulfillment === "llevar") {
        if (!customerName.value.trim()) {
            showToast(
                "Escribe el nombre del cliente"
            );
            customerName.focus();
            return false;
        }
    }

    if (fulfillment === "domicilio") {
        if (!customerName.value.trim()) {
            showToast(
                "Escribe el nombre de quien recibe"
            );
            customerName.focus();
            return false;
        }

        if (!deliveryAddress.value.trim()) {
            showToast(
                "Escribe la dirección de entrega"
            );
            deliveryAddress.focus();
            return false;
        }

        if (
            getSelectedPaymentMethod() !==
            "transferencia"
        ) {
            showToast(
                "A domicilio solo se acepta transferencia"
            );
            return false;
        }
    }

    if (!getSelectedPaymentMethod()) {
        showToast(
            "Selecciona un método de pago"
        );
        return false;
    }

    return true;
}


/* WHATSAPP DEL PEDIDO */

sendWhatsAppButton.addEventListener(
    "click",
    () => {
        if (!cart.length) {
            return;
        }

        if (!validateCheckout()) {
            return;
        }

        if (
            !WHATSAPP_NUMBER ||
            WHATSAPP_NUMBER === "TU_NUMERO"
        ) {
            window.alert(
                "Debes configurar el número real de WhatsApp en script.js."
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
    const fulfillment =
        getSelectedFulfillment();

    const paymentMethod =
        getSelectedPaymentMethod();

    const fulfillmentLabels = {
        local: "En local",
        llevar: "Para llevar",
        domicilio: "A domicilio"
    };

    const paymentLabels = {
        efectivo: "Efectivo",
        transferencia: "Transferencia"
    };

    const lines = [
        "🍔 NUEVO PEDIDO - GARAGE ROCK",
        ""
    ];

    cart.forEach((item) => {
        lines.push(
            `${item.quantity}x ${item.name}`
        );

        lines.push(
            `Precio base: ${formatCurrency(item.basePrice)}`
        );

        if (item.options.length) {
            lines.push("Modificaciones:");

            item.options.forEach(
                (option) => {
                    lines.push(
                        `• ${option}`
                    );
                }
            );
        }

        if (item.extras.length) {
            lines.push("Extras:");

            item.extras.forEach(
                (extra) => {
                    lines.push(
                        `• ${extra.name} +${formatCurrency(extra.price)}`
                    );
                }
            );
        }

        if (item.notes) {
            lines.push(
                `Nota: ${item.notes}`
            );
        }

        lines.push(
            `Subtotal: ${formatCurrency(
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

    lines.push("------------------------");
    lines.push(
        `TOTAL: ${formatCurrency(total)}`
    );
    lines.push("");
    lines.push(
        `Tipo de pedido: ${fulfillmentLabels[fulfillment]}`
    );

    if (fulfillment === "local") {
        lines.push(
            "Mesa: se asigna al llegar"
        );
    }

    if (
        fulfillment === "llevar" ||
        fulfillment === "domicilio"
    ) {
        lines.push(
            `Nombre: ${customerName.value.trim()}`
        );
    }

    if (fulfillment === "domicilio") {
        lines.push(
            `Dirección: ${deliveryAddress.value.trim()}`
        );

        if (
            deliveryReferences.value.trim()
        ) {
            lines.push(
                `Referencias: ${deliveryReferences.value.trim()}`
            );
        }
    }

    lines.push(
        `Pago: ${paymentLabels[paymentMethod]}`
    );

    if (orderNotes.value.trim()) {
        lines.push(
            `Notas generales: ${orderNotes.value.trim()}`
        );
    }

    if (fulfillment === "domicilio") {
        lines.push("");
        lines.push(
            "Costo de envío: por confirmar"
        );
    }

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

updateScheduleInterface();

renderProducts();

renderCart();

updateCheckoutFields();

/*
Revisa el horario cada minuto.
Si cambia de turno mientras la página está abierta,
las tarjetas se actualizan automáticamente.
*/
window.setInterval(
    () => {
        const detectedPeriod =
            getCurrentServicePeriod();

        if (
            detectedPeriod !==
            lastDetectedServicePeriod
        ) {
            lastDetectedServicePeriod =
                detectedPeriod;

            if (detectedPeriod) {
                currentMealPeriod =
                    detectedPeriod;
                currentCategory =
                    "todos";
            }

            updateScheduleInterface();
            renderProducts();
        }
    },
    60000
);

/* ACTUALIZACIÓN AUTOMÁTICA DEL ESTADO DEL RESTAURANTE */

updateRestaurantHoursCard();

window.setInterval(
    updateRestaurantHoursCard,
    60 * 1000
);

