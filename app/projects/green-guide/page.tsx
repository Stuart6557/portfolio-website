import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function GreenGuide() {
	return (
		<BigCard
			backNavLink="/projects"
			title="Green Guide"
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