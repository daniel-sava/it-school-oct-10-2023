import styles from "./Card.module.css";

export default function Card(props) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            <button
                onClick={() => {
                    props.incrementCounterCallback();
                }}
            >
                Click me!
            </button>
            Butonul a fost apasat de {props.counter} ori.
        </div>
    );
}
