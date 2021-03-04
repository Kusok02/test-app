import styles from "./Header.module.css"
import userIcon from "../images/User.svg"
import infoIcon from "../images/info.svg"
import arrowDownIcon from "../images/arrow-bottom.svg"
import arrowRightIcon from "../images/arrow-right.svg"
import bellIcon from "../images/Bell.svg"

export const Header = (props) => {

    return (
        <div className={styles.header_wrapper}>

            <div className={styles.burger_menu}>
                <label htmlFor="checkbox" className={styles.menu_btn}>
                    <input id="checkbox" type="checkbox" className={styles.menu_btn_checkbox}/>
                    <div className={styles.menu_btn_burger}>
                    </div>

                    <div className={styles.text}>
                        <ul>
                            <li>Избранное <img src={arrowRightIcon} alt="infoIcon"/></li>
                            <li className={styles.activeLink}>Тестовое задание <img src={arrowRightIcon} alt="infoIcon"/></li>
                            <li>Пункт 3 <img src={arrowRightIcon} alt="infoIcon"/></li>
                            <li>Пункт 4 <img src={arrowRightIcon} alt="infoIcon"/></li>
                            <li>Пункт 5 <img src={arrowRightIcon} alt="infoIcon"/></li>
                        </ul>
                    </div>
                </label>
            </div>

            <div className={styles.logo}>
                Logo
            </div>

            <div className={styles.users_info}>
                <a href="/">
                    <img src={infoIcon} alt="infoIcon"/>
                </a>
                <a href="/">
                    <img src={bellIcon} alt="bellIcon"/>
                </a>
                <a href="/">
                    <img src={userIcon} alt="userIcon"/>
                </a>
                <a href="/">Фамилия Имя</a>
                <a href="/" className={styles.arrowIcon}>
                    <img src={arrowDownIcon} alt="arrowIcon" className={styles.arrowIcon}/>
                </a>

            </div>
        </div>
    )
}