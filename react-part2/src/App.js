import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Name from "./components/Name";
import Product from "./components/Product";
import Todos from "./components/Todos";
import NameContextProvider from "./contexts/name-context";

function App() {
    const [currentProductName, setCurrentProductName] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();

        // fetch("https://dummyjson.com/products/search?q=laptop")
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log(result);
        //         setProducts(result.products);
        //     });
    }, []);

    async function getProducts() {
        // npm install axios pentru a folosi axios
        const response = await axios.get(
            "https://dummyjson.com/products/search?q=laptop"
        );

        console.log(response);
        setProducts(response.data.products);
    }

    useEffect(() => {
        fetch("https://dummyjson.com/todos/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                todo: "Use DummyJSON in the project",
                completed: false,
                userId: 5,
            }),
        })
            .then((res) => res.json())
            .then(console.log);
    });

    return (
        <NameContextProvider>
            <Name />
            <section>
                <h2 className="title">Cele mai noi produse</h2>
                {currentProductName ? (
                    <p>Produsul selectat este: {currentProductName}</p>
                ) : (
                    <p>Nu ai selectat niciun produs</p>
                )}
                <div className="products-section">
                    {products.length > 0 &&
                        products.map((product, index) => {
                            return (
                                <Product
                                    key={index}
                                    productName={product.title}
                                    productDescription={product.description}
                                    productQuantity={product.stock}
                                    productPrice={product.price}
                                    productImage={product.thumbnail}
                                    selectProductCallback={
                                        setCurrentProductName
                                    }
                                />
                            );
                        })}
                </div>
            </section>
            <Todos />
        </NameContextProvider>
    );
}

export default App;
