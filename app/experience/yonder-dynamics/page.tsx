import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';

export default function Yonder() {
	return (
		<PageTemplate
			backNavLink="/experience"
			backNav="Experience"
			heading="Developer at Yonder Dynamics"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<p>
								This page is still in progress. Stay tuned :)
								{/* Shameless plug */}
							</p>
						</div>
					}
				/>
			}
		/>
	);
};