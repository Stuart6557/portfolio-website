import PageTemplate from '@/app/components/PageTemplate';
import BigProjectCard from '@/app/components/BigProjectCard';
import styles from './style.module.scss';

export default function LakGoodsTransport() {
	return (
		<PageTemplate
			backNavLink="/projects"
			heading="LAK Goods Transport Application"
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