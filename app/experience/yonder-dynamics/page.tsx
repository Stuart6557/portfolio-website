import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from '../../components/BigCard/style.module.scss';
import Link from 'next/link';

export default function Yonder() {
	return (
		<PageTemplate
			backNavLink="/experience"
			backNav="Experience"
			heading="Developer at Yonder Dynamics"
			content={
				<BigCard
					content={
						<div>
							<h2>🏢 About Yonder Dynamics</h2>
							<hr />
							<p>
								Yonder Dynamics is a student robotics organization at UC San Diego. We design
								and build a Mars rover for the annual University Rover Challenge (URC), a
								prestigious international competition that challenges college students to
								build the next generation of Mars rovers that will one day work alongside
								astronauts exploring the Red Planet.
							</p>

							<br />

							<h2>👩🏻‍💼 My Role</h2>
							<hr />
							<p>
								I was on the Software subteam, which is the team that writes all the code
								for the rover (e.g. UI, Vision, Motion Planning and Controls). I specifically
								worked on ARUCO tag detection with the OpenCV Computer Vision Library library
								in Python for the Autonomous Navigation Mission of the competition, where the
								rover is required to either find and stop near a post with an ARUCO tag or
								traverse through 2 posts with ARUCO tags autonomously. I also worked on
								Position Filtering for continuous tag location estimation by implementing a
								complementary filter that uses data from sensors to track orientation.
							</p>

							<br />

							<h2>🏆 Competition Results</h2>
							<hr />
							<p>
								We ended up doing really well at URC 2023 and finishing 5th overall out of
								31 teams from 11 countries in the finals, an improvement from the previous
								year's 8th place finish. We also got 2nd in the Autonomous Navigation Mission!
							</p>

							<br />

							<h2>📌 Links and Shameless Plug</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://urc.marssociety.org/home"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										URC website
									</Link>
								</li>
								<li>
									<Link
										href="https://www.youtube.com/watch?v=pqIra7yutwA"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										System Acceptance Review
									</Link>
									&nbsp;(Video submission)
								</li>
								<li>
									<Link
										href="https://docs.google.com/spreadsheets/d/1CkDN8YhflSnwLdApY2BDB1g1IctdRYlMLRweHZo_OjY/edit?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Final Scores
									</Link>
								</li>
								<li>
									<Link
										href="https://gitlab.com/Yonder-Dynamics/"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										GitLab
									</Link>
								</li>
								<li>
									<Link
										href="https://yonderdynamics.org/#/"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Yonder Dynamics website
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