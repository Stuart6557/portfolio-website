import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function ACMUcsd() {
	return (
		<BigCard
			backNavLink="/experience"
			title="Automation Developer at ACM"
			content={
				<div className={styles.content}>
					<p>
						This page is still in progress. Stay tuned :)
					</p>
				</div>
			}
		/>
	);
};