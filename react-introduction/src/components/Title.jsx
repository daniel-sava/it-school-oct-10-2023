import styles from "./Title.module.css";

export default function Title(props) {
    return (
        <h1 className={styles.primaryTitle}>
            (Clicked {props.counter}) {props.children}
        </h1>
    );
}
