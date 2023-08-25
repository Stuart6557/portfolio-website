import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function FinanceBuddy() {
	return (
		<BigCard
			backNavLink="/projects"
			title="Finance Buddy"
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