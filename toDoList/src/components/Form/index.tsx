import styles from './style.module.css';

export function Form() {
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Adiciona uma Tarefa" />
            <button type="submit">Adicionar</button>
        </form>
    );
}