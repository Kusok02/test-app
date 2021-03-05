import {Navbar} from "../Navbar/Navbar";
import {Log} from "../Log/Log";
import styles from "./Content.module.css"

export const Content = (props) => {
    return (
        <div className={styles.content_wrapper}>
            <Navbar/>

            <Log />
        </div>
    )
}