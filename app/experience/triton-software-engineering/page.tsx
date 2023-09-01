import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';

export default function TSE() {
	return (
		<PageTemplate
			backNavLink="/experience"
			heading="VP Operations, Developer at Triton Software Engineering"
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