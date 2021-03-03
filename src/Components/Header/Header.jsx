import styles from "./Header.module.css"

export const Header = (props) => {
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.logo}>
                Logo
            </div>

            <div className={styles.users_info}>
                <a href="/"> <img src="https://cdn3.iconfinder.com/data/icons/line/36/info-256.png" alt="info"/>
                </a>
                <a href="/"> <img
                    src="https://cdn0.iconfinder.com/data/icons/interface-line-4/48/notification_bell_ring-256.png"
                    alt="notifications"/>
                </a>
                <a href="/"> <img src="https://cdn3.iconfinder.com/data/icons/forgen-user/48/user-2-crircle-256.png"
                                  alt="profile"/>
                </a>
                <a href="/">Фамилия Имя</a>
                <a href="/"> <img src="https://cdn2.iconfinder.com/data/icons/pointers-5/24/chevron-down-256.png"
                                  alt="arrow-bottom"/>
                </a>

            </div>
        </div>
    )
}