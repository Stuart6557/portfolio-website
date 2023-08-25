import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function ToxicCommentClassification() {
	return (
		<BigCard
			backNavLink="/projects"
			title="Toxic Comment Classification"
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