import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function Yonder() {
	return (
		<BigCard
			backNavLink="/experience"
			title="Developer at Yonder Dynamics"
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