import { useContext } from "react";
import { NameContext } from "../contexts/name-context";
import styles from "./Product.module.css";

export default function Product(props) {
    const { name, setName } = useContext(NameContext);

    return (
        <div className={styles.productContainer}>
            <img className={styles.productImage} src={props.productImage} />
            <h4 className={styles.productName}>{props.productName}</h4>
            <p className={styles.productDescription}>
                {props.productDescription}
            </p>
            <p className={`${styles.productPrice}`}>
                {props.productPrice} RON , for you {name}
                <span
                    className={
                        props.productQuantity
                            ? styles.productInStock
                            : styles.productOutOfStock
                    }
                >
                    {props.productQuantity ? "In Stoc" : "Stoc Epuizat"}
                </span>
            </p>
            {props.productQuantity > 0 ? (
                <a
                    onClick={() => {
                        props.selectProductCallback(props.productName);
                    }}
                    className={styles.productAddToCart}
                    href="#"
                >
                    Add to cart
                </a>
            ) : (
                <a className={styles.productNotification} href="#">
                    Notify me
                </a>
            )}
        </div>
    );
}
