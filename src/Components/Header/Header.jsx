import styles from "./Header.module.css"

export const Header = (props) => {
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.logo}>
                Logo
            </div>

            <div className={styles.users_info}>
                <a href="/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#BEC7D0" stroke-width="2"/>
                        <path
                            d="M11.8594 11.625V16.875H11.1094H12.6094M11.1094 11.625H11.8594H11.1094ZM12.6094 11.625H11.8594H12.6094Z"
                            stroke="#BEC7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M11.8594 9C12.2736 9 12.6094 8.66421 12.6094 8.25C12.6094 7.83579 12.2736 7.5 11.8594 7.5C11.4452 7.5 11.1094 7.83579 11.1094 8.25C11.1094 8.66421 11.4452 9 11.8594 9Z"
                            fill="#BEC7D0" stroke="#BEC7D0"/>
                    </svg>

                </a>
                <a href="/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.15564 21H15.1556" stroke="#BEC7D0" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path
                            d="M5.4248 9.74994C5.42356 8.86045 5.59838 7.97951 5.93919 7.1579C6.28 6.33628 6.78006 5.59025 7.41054 4.9628C8.04101 4.33535 8.78945 3.83889 9.61269 3.50204C10.4359 3.16519 11.3177 2.99461 12.2072 3.00013C15.9187 3.02772 18.8875 6.11275 18.8875 9.83468V10.4999C18.8875 13.8577 19.59 15.8061 20.2087 16.871C20.2753 16.9848 20.3108 17.1142 20.3115 17.246C20.3122 17.3779 20.2781 17.5076 20.2127 17.6221C20.1473 17.7366 20.0528 17.8318 19.9388 17.8982C19.8249 17.9645 19.6954 17.9996 19.5635 17.9999H4.74798C4.6161 17.9996 4.48663 17.9645 4.37265 17.8981C4.25867 17.8318 4.1642 17.7366 4.09877 17.622C4.03335 17.5075 3.99928 17.3778 4.00001 17.2459C4.00074 17.114 4.03624 16.9846 4.10292 16.8709C4.72198 15.8059 5.4248 13.8575 5.4248 10.4999L5.4248 9.74994Z"
                            stroke="#BEC7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#BEC7D0" stroke-width="2" stroke-miterlimit="10"/>
                        <path
                            d="M14.75 11.25C14.75 12.7688 13.5188 14 12 14C10.4812 14 9.25 12.7688 9.25 11.25C9.25 9.73122 10.4812 8.5 12 8.5C13.5188 8.5 14.75 9.73122 14.75 11.25Z"
                            stroke="#BEC7D0" stroke-width="2" stroke-miterlimit="10"/>
                        <path
                            d="M5.9812 18.6913C6.54615 17.5806 7.40744 16.6478 8.46973 15.9963C9.53202 15.3448 10.7539 15 12 15C13.2462 15 14.468 15.3448 15.5303 15.9963C16.5926 16.6478 17.4539 17.5806 18.0189 18.6913"
                            stroke="#BEC7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </a>
                <a href="/">Фамилия Имя</a>
                <a href="/">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1.5L4 4.5L1 1.5" stroke="#364E65" stroke-width="1.5" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>

            </div>
        </div>
    )
}