import styles from './css/Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <img src="/logo.svg" alt="Projeto Todo" />
        </header>
    )
}

export { Header }