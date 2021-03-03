import styles from "./Header.module.css"
import {Svg} from "../images/SvgIcons"

export const Header = (props) => {
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.logo}>
                Logo
            </div>

            <div className={styles.users_info}>
                <a href="/">
                    <Svg i={0}/>
                </a>
                <a href="/">
                    <Svg i={1}/>
                </a>
                <a href="/">
                    <Svg i={2}/>
                </a>
                <a href="/">Фамилия Имя</a>
                <a href="/">
                    <Svg i={3}/>
                </a>

            </div>
        </div>
    )
}