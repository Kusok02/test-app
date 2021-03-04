import styles from "./Content.module.css"
import {UpdateLog} from "../../Redux/UpdateLog";

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

            <UpdateLog />

        </div>
    )
}