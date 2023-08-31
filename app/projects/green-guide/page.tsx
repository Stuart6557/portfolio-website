import PageTemplate from '@/app/components/PageTemplate';
import BigProjectCard from '@/app/components/BigProjectCard';
import styles from './style.module.scss';

export default function GreenGuide() {
	return (
		<PageTemplate
			backNavLink="/projects"
			heading="Green Guide"
			content={
				<BigProjectCard
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