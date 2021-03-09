import {UpdateLog} from "../../Redux/UpdateLog";
import styles from "./Log.module.css"

export const Log = (props) => {
    return (
            <div className={styles.log_wrapper}>
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