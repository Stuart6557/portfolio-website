import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function TSE() {
	return (
		<BigCard
			backNavLink="/experience"
			title="VP Operations, Developer at Triton Software Engineering"
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