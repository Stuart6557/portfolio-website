import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from '../../components/BigCard/style.module.scss';
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
						<div>
							<h2>🏢 About Triton Software Engineering (TSE)</h2>
							<hr />
							<p>
							Triton Software Engineering (TSE) is a multidisciplinary student organization
							at UC San Diego. We partner with nonprofit organizations to design and develop
							software pro-bono for social good while giving our members practical, real world
							experience.
							</p>

							<br />

							<h2>👩🏻‍💼 My Roles</h2>
							<hr />
							<b>Developer</b>
							<p>
								I applied to TSE as a developer in fall of my freshman year and worked on a
								project for the nonprofit Laktaa Bhutan. You can read more about that&nbsp;
								<Link href={`${prefix}/projects/lak-goods-transport`} className={styles.link}>
									here
								</Link>.
							</p>

							<b>VP Operations</b>
							<p>
								I applied to and became VP Operations in winter 2023. My job is to maintain the
								infrastructure of the organization and make the necessary connections and actions
								to ensure a thriving culture within TSE. Some of my resopnsibilities include
								maintaining rosters and updating them quarterly, collaborating with other
								organizations, managing all finances, planning and handling logistics for all
								events, writing and maintaining a &gt;60 page playbook, directing marketing,
								spearheading recruitment, and more. Because of the amount of resopnsibilities
								and deadlines, I've gotten a lot better at time management, communication, and
								deadling with unexpected, challenging situations.
							</p>

							<b>Women in TSE</b>
							<p>
								I have also been the leader of Women in TSE since fall 2023, a group for
								female and non-binary identifying members. I ensure everyone feels welcome and
								plan a social event every quarter!
							</p>

							<br />

							<h2>📌 Shameless Plug</h2>
							<hr />
							<p>
								If you're a UCSD undergrad interested in software engineering, please consider
								applying to TSE! You get to learn so many popular skills and gain experience that
								closely resembles industry.
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