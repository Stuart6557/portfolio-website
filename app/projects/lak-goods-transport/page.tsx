import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';

export default function LakGoodsTransport() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="LAK Goods Transport Application"
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