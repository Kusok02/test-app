import styles from "./Header.module.css"
import userIcon from "../images/User.svg"
import infoIcon from "../images/info.svg"
import arrowIcon from "../images/arrow-bottom.svg"
import bellIcon from "../images/Bell.svg"

export const Header = (props) => {
    return (
        <div className={styles.header_wrapper}>
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
                    <img src={arrowIcon} alt="arrowIcon" className={styles.arrowIcon}/>
                </a>

            </div>
        </div>
    )
}