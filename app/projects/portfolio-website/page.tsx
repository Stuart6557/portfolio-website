import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';

export default function PortfolioWebsite() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Portfolio Website"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<p>
								This page is still in progress. Stay tuned :)
								{/* CSS units, SSR, caching, responsive web design */}
							</p>
						</div>
					}
				/>
			}
		/>
	);
};