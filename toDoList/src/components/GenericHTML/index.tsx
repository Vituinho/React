import styles from './style.module.css';

type GenericHTMLProps = {
    children: React.ReactNode;
}

export function GenericHTML({ children }: GenericHTMLProps) {
    return (
        <h1 className={styles.genericHtml}>{children}</h1>
    );
}