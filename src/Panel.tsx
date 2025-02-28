import * as React from "react";
import styles from "./Panel.module.css";

type Props = {
    title: string;
    children: React.ReactNode;
}

export const Panel: React.FC<Props> = ({title, children}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}