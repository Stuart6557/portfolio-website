import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { prefix } from '@/app/prefix';

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
							<h2>🔗 Links</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://devpost.com/software/green-guide"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Devpost submission
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/Stuart6557/LA-Hacks-2023"
										target="_blank"
										rel="noopener noreferrer"
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
										src={`${prefix}/projects/green-guide/home.png`}
										alt="Home Page"
										className={styles.image}
									/>
								</div>
								<div className={styles.cardsContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/green-guide/cards.png`}
										alt="Waste Sorting Guide"
										className={styles.image}
									/>
								</div>
								<div className={styles.signupContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/green-guide/signup.png`}
										alt="Signup Page"
										className={styles.image}
									/>
								</div>
								<div className={styles.loginContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/green-guide/login.png`}
										alt="Login Page"
										className={styles.image}
									/>
								</div>
								<div className={styles.profileContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/green-guide/profile.png`}
										alt="Profile Page"
										className={styles.image}
									/>
								</div>
								<div className={styles.minigameContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/green-guide/mini-game.png`}
										alt="Mini Game"
										className={styles.image}
									/>
								</div>
								<div className={styles.trackerContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/green-guide/tracker.png`}
										alt="Recycling Tracker"
										className={styles.image}
									/>
								</div>
							</div>

							<br />

							<h2>📚 Description</h2>
							<hr />
							<p>
								<b>Background: </b>
								I collaborated with 3 of my friends to build Green Guide for LA Hacks
								2023. We chose the Green House track, which was all about sustainability,
								and built a web app designed to help people stay informed about what to
								do with different types of waste.
							</p>
							<p>
								<b>Project Details: </b>
								Users will be able to access a few different resources and features
								upon creating and/or signing into an account. There are flippable
								double-sided cards on the home page that serve as a guide to waste
								sorting and contain links to external resources. There is also a
								recycling tracker to help users document their recycling habits and a
								memory matching game for fun.
							</p>
							<p>
								I acted as an engineering manager for this project, setting up the repo,
								creating issues, and giving a mini React crash course to some of my
								teammates who were new to React. I worked on some of the frontend and also
								learned React context and Firebase for the authentication since none of us
								knew how to do this before the hackathon. (Fun fact: I stayed up until 5am
								to figure this out). My friends managed to build some incredible features
								as I was working on the authentication, and in the end I was proud that
								we were able to get our app working.
							</p>
							<p>
								We didn't have that much time during the hackathon to build everything we
								wanted to, especially since we also wanted to experience the UCLA life
								(side note: UCLA dining halls are absolutely incredible). If we had more
								time, we would've added a backend and a data visualization tool for the
								recycling tracker. I would also try to improve the code quality, since we
								were rushing to get everything done and didn't have time to do so at the
								hackathon. For example, I would add linting, enforce consistent use of CSS
								variables, and remove any hard coded values to have a more responsive web
								design.
							</p>
						</div>
					}
				/>
			}
		/>
	);
};