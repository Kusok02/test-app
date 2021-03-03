import styles from "./Navbar.module.css"
import {Svg} from "../images/SvgIcons"

export const Navbar = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <div className={styles.nav}>
                <a href="/">
                    <Svg i={4}/>
                </a>
                <a href="/" className={styles.activeLink}>
                    <Svg i={5}/>
                </a>
                <a href="/">
                    <Svg i={6}/>
                </a>
                <a href="/">
                    <Svg i={7}/>
                </a>
                <a href="/">
                    <Svg i={8}/>
                </a>
            </div>
        </div>
    )
}