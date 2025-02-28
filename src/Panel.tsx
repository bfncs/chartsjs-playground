import * as React from "react";
import { clsx } from "clsx";
import styles from "./Panel.module.css";

type Props = {
	title: string;
	halfWidth?: boolean;
	children: React.ReactNode;
};

export const Panel: React.FC<Props> = ({ title, halfWidth, children }) => {
	return (
		<div
			className={clsx(styles.wrapper, {
				[styles.half]: halfWidth,
			})}
		>
			<div className={styles.card}>
				<h2>{title}</h2>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};
