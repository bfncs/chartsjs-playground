import * as React from "react";
import { clsx } from "clsx";
import styles from "./Panel.module.css";

type Props = {
	title: string;
	halfWidth?: boolean;
	kpiValue?: string;
	kpiChange?: string;
	children: React.ReactNode;
};

export const Panel: React.FC<Props> = ({
	title,
	halfWidth,
	kpiValue,
	kpiChange,
	children,
}) => {
	return (
		<div
			className={clsx(styles.wrapper, {
				[styles.half]: halfWidth,
			})}
		>
			<div className={styles.card}>
				<h2>{title}</h2>
				<div className={styles.kpiWrapper}>
					{kpiValue && <span className={styles.kpiValue}>{kpiValue}</span>}
					{kpiChange && (
						<>
							<span className={styles.kpiChange}>{kpiChange}</span>
							<span className={styles.kpiChangeExplanation}>
								im Vergleich zum letzten Monat
							</span>
						</>
					)}
				</div>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};
