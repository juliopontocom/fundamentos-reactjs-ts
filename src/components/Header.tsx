import styles from './Header.module.css'

export function Header(){
    return (
        <header className={styles.header}>
            <img src="https://odevjulio.com.br/assets/ignite-logo.svg" alt="ignite-logo" />
        </header>
    );
}