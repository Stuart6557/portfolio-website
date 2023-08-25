import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function UpdateGradDateAutomator() {
	return (
		<BigCard
			backNavLink="/projects"
			title="Update Grad Date Automator"
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