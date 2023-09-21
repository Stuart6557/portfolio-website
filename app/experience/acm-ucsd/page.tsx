import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from '../../components/BigCard/style.module.scss';
import Link from 'next/link';
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
						<div>
							<h2>🏢 About ACM at UC San Diego</h2>
							<hr />
							<p>
								ACM is an inclusive member-first community for all who are interested
								in the field of computing. We welcome all skill levels and majors!
							</p>

							<br />

							<h2>👩🏻‍💼 My Role</h2>
							<hr />
							<p>
								I joined ACM at the beginning of my freshman year. I attended a few
								socials and workshops and participated in Hack School, a quarter-long
								web development bootcamp. I liked ACM and wanted to get more involved, so
								I applied to the Diamond Staff program in late fall.
							</p>

							<b>Diamond Staff Automation Developer</b>
							<p>
								ACM's Diamond Staff program is like an internship, where Staff members get
								to shadow current board members and work on a project of their own. I was
								offered a Staff Automation Developer position in December, and built an Event QR
								Code Generator over the next few months. You can read more about my project&nbsp;
								<Link href={`${prefix}/projects/event-qr-generator`} className={styles.link}>
									here
								</Link>.
							</p>
							<p>
								I also wanted to improve my frontend skills despite not being a frontend
								developer. Upon hearing that Faris, ACM's VP Development, was giving Staff
								frontend developers a frontend bootcamp, I asked for one too. And within two
								meetings that totaled to around 3 hours, he taught me the basics of React and
								CSS. While I had been introduced to React and CSS beforehand, these sessions
								greatly strengthened my skills and my understanding. The foundation of my
								frontend skills stems from this bootcamp, so huge shoutout to Faris!
							</p>
							<p>
								After the first bootcamp session, I made a small side project that fetches
								and displays ACM's past events and features a search functionality. You can
								take a look at the project&nbsp;
								<Link
									href="https://codesandbox.io/s/take-home-project-vwhn8g?file=/src/App.js"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									here
								</Link>.
							</p>

							<b>Automation Developer</b>
							<p>
								In May, I applied to be a full Automation Developer on ACM's development team.
								I now work on building and maintaining ACM's Discord bots, completing a
								variety of tasks such as proper bot error messages and programming a new bot
								with discord.js v14 since our bots were only using v13. I had only worked on
								a small section of the bots' repos up until that point, so I spent a long time
								studying our old code, watching tutorials, and reading through documentation to
								learn how to set up the new repo. I learned a lot about things like dependency
								injection and dynamic imports, and even managed to catch and fix a bug with
								recursion and async functions that went unnoticed for a long time.
							</p>

							<br />

							<h2>📌 Shameless Plug</h2>
							<hr />
							<p>
								If you are a UCSD student, I encourage you to give ACM a try! We have so
								many programs and opportunities for everyone, even if you're not a CS or
								related major. Here are some useful links if you'd like to get involved:
							</p>
							<ul>
								<li>
									<Link
										href="https://acmucsd.com"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										ACM website
									</Link>
								</li>
								<li>
									<Link
										href="https://www.instagram.com/acm.ucsd/"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Instagram
									</Link>
								</li>
								<li>
									<Link
										href="https://acmurl.com/discord"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Discord server
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