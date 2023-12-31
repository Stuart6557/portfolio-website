import styles from './page.module.scss';
import Link from 'next/link';
import PageTemplate from '../components/PageTemplate';

export default function About() {
	return (
		<PageTemplate
			heading='About'
			content={
				<div className={styles.card}>
					<h2>📌 Intro</h2>
					<hr />
					<p>
						I am currently a second year Computer Science major at the University
						of California, San Diego. As a curious individual who is always looking
						forward to learning new things, I chose computer science because there
						is always something more to discover and create. I am passionate about
						using my skills and technology for social good and to make an impact.
					</p>
					<p>
						Outside of classes, I am a computer science tutor, a developer at my
						school's ACM chapter, and a Vice President at Triton Software Engineering.
						In my free time, I like to take walks, cook and eat all types of food,
						and play games with my brother.
					</p>

					<br />

					<h2>🔗 Links</h2>
					<hr />
					<p>
						Resume:&nbsp;
						<Link href="/resume.pdf" target="_blank" className={styles.link}>
							resume.pdf
						</Link>
					</p>
					<p>
						LinkedIn:&nbsp;
						<Link 
							href="https://www.linkedin.com/in/vivian-liu-336148202/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							www.linkedin.com/in/vivian-liu-336148202/
						</Link>
					</p>
					<p>
						GitHub:&nbsp;
						<Link
							href="https://github.com/Stuart6557"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							github.com/Stuart6557
						</Link>
					</p>

					<br />

					<h2>📨 Get in Touch!</h2>
					<hr />
					<p>
						You can email me at&nbsp;
						<Link href="mailto:v6liu@ucsd.edu"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							v6liu@ucsd.edu
						</Link>
					</p>

					<br />

					<h2>😎 Fun Facts About Me</h2>
					<hr />
					<ul>
						<li>
							My favorite food is curently bread, and my favorite emoji is 🥖
						</li>
						{/* <li>
							My high score on&nbsp;
							<Link
								href="https://arithmetic.zetamac.com"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
							>
								Zetamac
							</Link>
							&nbsp;with the default settings is currently 57 🧮
						</li> */}
						<li>
							As of September 1, 2023, I am on a 2159 day Duolingo streak 🔥
						</li>
						<li>
							I taught myself how to do all 3 splits and front split
							backbends 💃
						</li>
						<li>
							I like to edit short, funny videos in my free time.
							Check out one of them&nbsp;
							<Link
								href="https://www.youtube.com/watch?v=RZzQRQWFX5Y"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
							>
								here
							</Link>
							&nbsp;🎬
						</li>
					</ul>
				</div>
			}
		/>
	);
};