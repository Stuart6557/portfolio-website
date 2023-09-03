import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';

export default function EventQrGenerator() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Event QR Code Generator"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>Description</h2>
							<hr />
							<p>
								The Event QR Code Generator is something I worked on during my time
								as a Diamond Staff member on ACM's Development team. (You can read
								more about my ACM Diamond Staff experience&nbsp;
								<Link href="/" className={styles.link}>
										here
								</Link>).
							</p>

							<br />

							<h2>Images</h2>
							<hr />
							<p>Images go here</p>
						</div>
					}
				/>
			}
		/>
	);
};