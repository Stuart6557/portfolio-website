import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';

export default function ToxicCommentClassification() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Toxic Comment Classification"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<p>
								This page is still in progress. Stay tuned :)ead more about my
								{/* ACM experience&nbsp;
								<Link href="/experience/acm-ucsd" className={styles.link}>
										here
								</Link>
								. */}
							</p>
						</div>
					}
				/>
			}
		/>
	);
};