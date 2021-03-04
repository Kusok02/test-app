import React from "react";
import {Data} from "./Data";
import styles from "../Components/Content/Content.module.css";
import api from "../Components/images/api.svg"
import deviceMobile from "../Components/images/DeviceMobile.svg"
import laptop from "../Components/images/Laptop.svg"
import pencil from "../Components/images/Pencil.svg"
import folderSimplePlus from "../Components/images/FolderSimplePlus.svg"

export const UpdateLog = () => {

    return (
        <div className={styles.content}>

            {Data.map((data, key) => {

                switch (data.iconKey) {
                    case "API": {

                        return (
                            <div className={styles.contentItem}>

                                <div className={styles.name}>
                                    <img src={api} alt="apiIcon"/>
                                    <span>{data.header}</span>
                                </div>

                                <div>

                                    <div className={styles.update}>
                                        {data.posts[key].header}
                                    </div>

                                    <div className={styles.edited}>

                                        <div className={styles.edited__header}>
                                            <img src={pencil} alt="pencilIcon"/>
                                            {data.posts[key].paragraphs[key].header}
                                        </div>

                                        <ul>
                                            <li>
                                                {data.posts[key].paragraphs[key].subItems[key].content}
                                            </li>
                                            <li>
                                                {data.posts[key].paragraphs[key].subItems[key+1].content}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.added}>

                                        <div className={styles.added__header}>
                                            <img src={folderSimplePlus} alt="folderSimplePlusIcon"/>
                                            {data.posts[key].paragraphs[key+1].header}
                                        </div>

                                        <ul>
                                            <li>
                                                {data.posts[key].paragraphs[key+1].subItems[key].content}
                                            </li>
                                            <p>
                                                {data.posts[key].paragraphs[key+1].subItems[key+1].content}
                                            </p>
                                            <li>
                                                {data.posts[key].paragraphs[key+1].subItems[key+2].content}
                                            </li>
                                            <li>
                                                {data.posts[key].paragraphs[key+1].subItems[key+3].content}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        );

                    }

                    case "Web": {

                        return (
                            <div className={styles.contentItem}>

                                <div className={styles.name}>
                                    <img src={laptop} alt="laptopIcon"/>
                                    <span>{data.header}</span>
                                </div>

                                <div>

                                    <div className={styles.update}>
                                        {data.posts[key-1].header}
                                    </div>

                                    <div className={styles.edited}>

                                        <div className={styles.edited__header}>
                                            <img src={pencil} alt="pencilIcon"/>
                                            {data.posts[key-1].paragraphs[key-1].header}
                                        </div>

                                        <ul>
                                            <li>
                                                {data.posts[key-1].paragraphs[key-1].subItems[key-1].content}
                                            </li>
                                            <li>
                                                {data.posts[key-1].paragraphs[key-1].subItems[key].content}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles.added}>

                                        <div className={styles.added__header}>
                                            <img src={folderSimplePlus} alt="folderSimplePlusIcon"/>
                                            {data.posts[key-1].paragraphs[key].header}
                                        </div>


                                        <ul>
                                            <li>
                                                {data.posts[key-1].paragraphs[key].subItems[key-1].content}
                                            </li>
                                            <p>
                                                {data.posts[key-1].paragraphs[key].subItems[key].content}
                                            </p>
                                            <li>
                                                {data.posts[key-1].paragraphs[key].subItems[key+1].content}
                                            </li>
                                            <li>
                                                {data.posts[key-1].paragraphs[key].subItems[key+2].content}
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        );

                    }

                    case "Mobile": {
                        return (
                            <div className={styles.contentItem}>

                                <div className={styles.name}>
                                    <img src={deviceMobile} alt="deviceMobileIcon"/>
                                    <span>{data.header}</span>
                                </div>

                                <div>

                                    <div className={styles.update}>
                                        {data.posts[key-2].header}
                                    </div>

                                    <div className={styles.edited}>

                                        <div className={styles.edited__header}>
                                            <img src={pencil} alt="pencilIcon"/>
                                            {data.posts[key-2].paragraphs[key-2].header}
                                        </div>

                                        <ul>
                                            <li>
                                                {data.posts[key-2].paragraphs[key-2].subItems[key-2].content}
                                            </li>
                                            <li>
                                                {data.posts[key-2].paragraphs[key-2].subItems[key-1].content}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles.added}>

                                        <div className={styles.added__header}>
                                            <img src={folderSimplePlus} alt="folderSimplePlusIcon"/>
                                            {data.posts[key-2].paragraphs[key-1].header}
                                        </div>

                                        <ul>
                                            <li>
                                                {data.posts[key-2].paragraphs[key-1].subItems[key-2].content}
                                            </li>
                                            <p>
                                                {data.posts[key-2].paragraphs[key-1].subItems[key-1].content}
                                            </p>
                                            <li>
                                                {data.posts[key-2].paragraphs[key-1].subItems[key].content}
                                            </li>
                                            <li>
                                                {data.posts[key-2].paragraphs[key-1].subItems[key+1].content}
                                            </li>
                                            <li>
                                                {data.posts[key-2].paragraphs[key-1].subItems[key+2].content}
                                            </li>
                                            <li>
                                                {data.posts[key-2].paragraphs[key-1].subItems[key+2].content}
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        );

                    }


                }

            })}

        </div>
    );
};