import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { prefix } from '@/app/prefix';

export default function FinanceBuddy() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Finance Buddy"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>🔗 Links</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://github.com/Stuart6557/Finance-Buddy"
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
								<div className={styles.createContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/finance-buddy/create-2.png`}
										alt="Create purchase page"
									/>
								</div>
								<div className={styles.viewContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/finance-buddy/view.png`}
										alt="View purchase page"
									/>
								</div>
							</div>

							<br />

							<h2>📚 Description</h2>
							<hr />
							<p>
								<b>Background: </b>
								In fall of 2022, I participated in ACM at UC San Diego's Hack School
								program, a quarter-long web development bootcamp teaching development
								with the MERN stack. The program offered roughly one workshop every
								other week, each focusing on different aspects of developing a
								full-stack web application. I completed this Finance Buddy project
								following what was taught in the Hack School workshops.
							</p>
							<p>
								<b>Project Details: </b>
								This web app is a simple platform for users to create and track their
								finances. Users can use record their expenses through the "Create
								Purchase" tab and view their purchases in the "View Purchase" tab. If
								I had more time, I would implement all four CRUD data operations and
								add features that would allow users to update and delete expenses.
							</p>
							<p>
								This project was my very first introduction to full stack development.
								Before this, I had zero knowledge of React and backend and databases. I
								definitely learned a lot and recommend the Hack School experience!
							</p>
						</div>
					}
				/>
			}
		/>
	);
};