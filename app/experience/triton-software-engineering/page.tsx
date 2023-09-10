import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';
import { prefix } from '@/app/prefix';

export default function TSE() {
	return (
		<PageTemplate
			backNavLink="/experience"
			backNav="Experience"
			heading="VP Operations, Developer at Triton Software Engineering"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>🏢 About Triton Software Engineering (TSE)</h2>
							<hr />
							<p>
							Triton Software Engineering (TSE) is a multidisciplinary student organization
							at UC San Diego. We partner with nonprofit organizations to design and develop
							software pro-bono for social good while giving our members practical, real world
							experience.
							</p>

							<br />

							<h2>👩🏻‍💼 My Role</h2>
							<hr />
							<b>Developer</b>
							<p>
								I applied to TSE as a developer in fall of my freshman year.
								<Link href={`${prefix}/projects/lak-goods-transport`} className={styles.link}>
									here
								</Link>.
							</p>

							<b>VP Operations</b>
							<p>
								In winter quarter 2023, I applied to become VP Operations.
							</p>
							<p>
								Playbook
							</p>

							<b>Women in TSE</b>
							<p>
								Starting fall 2023, I have been the leader of Women in TSE, a group for
								female and non-binary identifying members.
							</p>

							<br />

							<h2>📌 Shameless Plug</h2>
							<hr />
							<p>
								If you're interested in software engineering, please consider applying to
								TSE! Gain experience that resembles industry, blah blah internships blah
							</p>
							<ul>
								<li>
									<Link
										href="https://tse.ucsd.edu"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										TSE website
									</Link>
								</li>
								<li>
									<Link
										href="https://www.instagram.com/ucsd_tse/"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Instagram
									</Link>
								</li>
							</ul>
						</div>
					}
				/>
			}
		/>
	);
};