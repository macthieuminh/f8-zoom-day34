import styles from "./Header.module.scss"

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="./logo-f8.jpg" alt="Logo" />
        </header>
    )
}

export default Header
