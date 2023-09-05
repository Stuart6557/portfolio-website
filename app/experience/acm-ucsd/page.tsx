import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';

export default function ACMUcsd() {
	return (
		<PageTemplate
			backNavLink="/experience"
			backNav="Experience"
			heading="Automation Developer at ACM"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<p>
								This page is still in progress. Stay tuned :)
								{/* Shameless plug for events, Hack School, Bit Byte, Diamond Staff, etc

								<Link href="https://acmurl.com/discord" target="_blank" className={styles.link}>
									ACM's Discord server
								</Link>

								<Link href="https://members.acmucsd.com" target="_blank" className={styles.link}>
									ACM Membership Portal
								</Link> */}
							</p>
						</div>
					}
				/>
			}
		/>
	);
};