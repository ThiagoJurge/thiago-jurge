import styles from './MainButton.module.css'

export const MainButton = ({children, size}) => {
    return <button className={`${styles.mainButton} ${styles[size]}`}>{children}</button>
}