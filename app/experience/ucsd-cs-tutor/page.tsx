import PageTemplate from '@/app/components/PageTemplate';
import BigProjectCard from '@/app/components/BigProjectCard';
import styles from './style.module.scss';

export default function CSTutor() {
	return (
		<PageTemplate
			backNavLink="/experience"
			heading="Computer Science Tutor at UC San Diego"
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