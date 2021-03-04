import styles from "./Navbar.module.css"
import starIcon from "../images/Star.svg"
import chartBarIcon from "../images/ChartBar.svg"
import clockCounterIcon from "../images/ClockCounterClockwise.svg"
import databaseIcon from "../images/Database.svg"
import monitorIcon from "../images/Monitor.svg"

export const Navbar = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <div className={styles.nav}>
                <a href="/">
                    <img src={starIcon} alt="starIcon"/>
                </a>
                <a href="/" className={styles.activeLink}>
                    <img src={monitorIcon} alt="monitorIcon"/>
                </a>
                <a href="/">
                    <img src={databaseIcon} alt="databaseIcon"/>
                </a>
                <a href="/">
                    <img src={chartBarIcon} alt="chartBarIcon"/>
                </a>
                <a href="/">
                    <img src={clockCounterIcon} alt="clockCounterIcon"/>
                </a>
            </div>
        </div>
    )
}