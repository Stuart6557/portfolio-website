import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';

export default function UpdateGradDateAutomator() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Update Grad Date Automator"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<p>
								This page is still in progress. Stay tuned :)
							</p>
						</div>
					}
				/>
			}
		/>
	);
};