import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function GreenGuide() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Green Guide"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>📚 Description</h2>
							<hr />
							<p>
								<b>Background: </b>
								I collaborated with 3 of my friends to build Green Guide for LA Hacks
								2023. We chose the Green House track, which was all about sustainability.
							</p>
							<p>
								<b>Project Details: </b>
								?
							</p>
							<p>
								Backend
								Data visualization tool
								Code quality: linting, css vars, hard code
							</p>

							<br />

							<h2>🔗 Links</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://devpost.com/software/green-guide"
										target="_blank"
										className={styles.link}
									>
										Devpost submission
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/Stuart6557/LA-Hacks-2023"
										target="_blank"
										className={styles.link}
									>
										GitHub repo
									</Link>
								</li>
							</ul>

							<br />

							<h2>🖼️ Images</h2>
							<hr />
							<div className={styles.images}>
								<div className={styles.homeContainer}>
									<Image
										fill={true}
										src="/projects/green-guide/home.png"
										alt="Revamp Announcement"
										className={styles.image}
									/>
								</div>
								<div className={styles.cardsContainer}>
									<Image
										fill={true}
										src="/projects/green-guide/cards.png"
										alt="Revamp Announcement"
										className={styles.image}
									/>
								</div>
								<div className={styles.signupContainer}>
									<Image
										fill={true}
										src="/projects/green-guide/signup.png"
										alt="Revamp Announcement"
										className={styles.image}
									/>
								</div>
								<div className={styles.loginContainer}>
									<Image
										fill={true}
										src="/projects/green-guide/login.png"
										alt="Revamp Announcement"
										className={styles.image}
									/>
								</div>
								<div className={styles.profileContainer}>
									<Image
										fill={true}
										src="/projects/green-guide/profile.png"
										alt="Revamp Announcement"
										className={styles.image}
									/>
								</div>
								<div className={styles.minigameContainer}>
									<Image
										fill={true}
										src="/projects/green-guide/mini-game.png"
										alt="Revamp Announcement"
										className={styles.image}
									/>
								</div>
								<div className={styles.trackerContainer}>
									<Image
										fill={true}
										src="/projects/green-guide/tracker.png"
										alt="Revamp Announcement"
										className={styles.image}
									/>
								</div>
							</div>
						</div>
					}
				/>
			}
		/>
	);
};