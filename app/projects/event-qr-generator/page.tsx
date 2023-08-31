import PageTemplate from '@/app/components/PageTemplate';
import BigProjectCard from '@/app/components/BigProjectCard';
import styles from './style.module.scss';

export default function EventQrGenerator() {
	return (
		<PageTemplate
			backNavLink="/projects"
			heading="Event QR Code Generator"
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