import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { prefix } from '@/app/prefix';

export default function ACMUcsd() {
	return (
		<PageTemplate
			backNavLink="/experience"
			backNav="Experience"
			heading="Automation Developer at ACM"
			content={
				<BigCard
					content={
						// <div className={styles.content}>
						// 	<p>
						// 		This page is still in progress. Stay tuned :)
						// 		Shameless plug for events, Hack School, Bit Byte, Diamond Staff, etc

						// 		<Link href="https://acmurl.com/discord" target="_blank" rel="noopener noreferrer" className={styles.link}>
						// 			ACM's Discord server
						// 		</Link>

						// 		<Link href="https://members.acmucsd.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
						// 			ACM Membership Portal
						// 		</Link>
						// 	</p>
						// </div>
						<div className={styles.content}>
						<h2>🖼️ About ACM at UC San Diego</h2>
						<hr />
						<div className={styles.about}>
							<div className={styles.logo}>
								<Image
									fill={true}
									src={`${prefix}/experience/acm-ucsd.png`}
									alt="Banquet Display"
								/>
							</div>
						</div>
						<p>
							Test?
						</p>

						<br />

						<h2>📚 Description</h2>
						<hr />
						<p>
							<b>Diamond Staff Automation Developer: </b>
							Hack School -{'>'} Diamond Staff
							Stuff with Faris
						</p>
						<p>
							<b>Automation Developer: </b>
							?
						</p>
						<p>
							?
						</p>
					</div>
					}
				/>
			}
		/>
	);
};