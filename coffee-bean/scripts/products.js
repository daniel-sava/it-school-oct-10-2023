const products = [
    {
        name: "CoffeeBean - Coffee 1 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-1.png",
    },
    {
        name: "CoffeeBean - Coffee 2 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-2.png",
    },
    {
        name: "CoffeeBean - Coffee 3 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-3.png",
    },
    {
        name: "CoffeeBean - Coffee 4 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-4.png",
    },
    {
        name: "CoffeeBean - Coffee 5 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-5.png",
    },
    {
        name: "CoffeeBean - Coffee 6 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-6.png",
    },
    {
        name: "CoffeeBean - Coffee Pack 1 2x 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-pack-1.png",
    },
    {
        name: "CoffeeBean - Coffee Pack 2 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/coffee-pack-2.png",
    },
    {
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
