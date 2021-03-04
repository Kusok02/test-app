import styles from "./Content.module.css"
import {Ap} from "../../Redux/main-reducer";

export const Content = (props) => {
    return (
        <div className={styles.content_wrapper}>
            <div className={styles.page_name}>
                <div className={styles.header}>Тестовое задание ФИО</div>

                <div className={styles.breadcrumbs_wrapper}>
                    <a href="/">Главная страница </a>
                    /
                    <a href="/"> тестовое задание</a>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contentItem}>a</div>
                <div className={styles.contentItem}>b</div>
                <div className={styles.contentItem}>c</div>
            </div>
            {/*<Ap />*/}
        </div>
    )
}