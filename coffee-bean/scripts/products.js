const cartCounterElement = document.getElementById("cart-counter");
const cart = [];

const products = [
    {
        id: 1,
        name: "CoffeeBean - Coffee 1 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-1.png",
    },
    {
        id: 2,
        name: "CoffeeBean - Coffee 2 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-2.png",
    },
    {
        id: 3,
        name: "CoffeeBean - Coffee 3 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-3.png",
    },
    {
        id: 4,
        name: "CoffeeBean - Coffee 4 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-4.png",
    },
    {
        id: 5,
        name: "CoffeeBean - Coffee 5 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-5.png",
    },
    {
        id: 6,
        name: "CoffeeBean - Coffee 6 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-6.png",
    },
    {
        id: 7,
        name: "CoffeeBean - Coffee Pack 1 2x 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-pack-1.png",
    },
    {
        id: 8,
        name: "CoffeeBean - Coffee Pack 2 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-pack-2.png",
    },
    {
        id: 9,
        name: "CoffeeBean - Coffee Pack 3 3x 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-pack-3.png",
    },
];

const productsListElement = document.getElementById("products-list");

products.forEach((product) => {
    const productCardElement = document.createElement("div");
    productCardElement.classList.add("product-card");

    productCardElement.appendChild(
        createProductImage(product.image, product.name)
    );
    productCardElement.appendChild(createProductName(product.name));
    productCardElement.appendChild(
        createProductDescription(product.description)
    );
    productCardElement.appendChild(createProductAddToCartButton(product.id));

    productsListElement.appendChild(productCardElement);
});

function createProductImage(src, alt) {
    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.setAttribute("src", src);
    productImage.setAttribute("alt", alt);

    return productImage;
}

function createProductName(name) {
    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.innerText = name;

    return productName;
}

function createProductDescription(description) {
    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.innerText = description;

    return productDescription;
}

function createProductAddToCartButton(productId) {
    const productAddToCartButton = document.createElement("a");
    productAddToCartButton.classList.add("product-add-to-cart-button");
    productAddToCartButton.innerHTML =
        '<i class="fa-solid fa-shopping-basket"></i> Add to cart';

    productAddToCartButton.addEventListener("click", () => {
        addProductToCart(productId);
    });

    return productAddToCartButton;
}

function addProductToCart(productId) {
    const productDetails = getProductDetails(productId);

    if (cart.some((product) => product.id === productId)) {
        cart.forEach((product) => {
            if (product.id === productId) {
                product.quantity++;
            }
        });
    } else {
        cart.push({
            id: productId,
            name: productDetails.name,
            quantity: 1,
        });
    }

    updateCartCounter();
}

function getProductDetails(productId) {
    for (let product of products) {
        if (product.id === productId) {
            return product;
        }
    }
}

function updateCartCounter() {
    cartCounterElement.innerText = cart.length;
}
