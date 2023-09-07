import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';

export default function UpdateGradDateAutomator() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Update Grad Date Automator"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>🔗 Links</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://github.com/Stuart6557/TSE/tree/main/AH_automation"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										GitHub repo
									</Link>
								</li>
							</ul>

							<br />

							<h2>📚 Description</h2>
							<hr />
							<p>
								<b>Background: </b>
								This was a project I made to automate a dull, repetitive task I do for
								Triton Software Engineering, or TSE for short (you can read more about my
								TSE experience&nbsp;
								<Link href="/experience/triton-software-engineering" className={styles.link}>
										here
								</Link>
								). TSE hosts 2 mandatory All Hands events every quarter, and each member has
								to provide their expected graduation date on an attendance form afterwards.
								My job as VP Operations is to compare everyone's graduation dates on the
								attendance form to the ones on the roster and update the roster if necessary.
								It is also my job to figure out who didn't submit the form and ask them to fill
								it out. Since TSE has up to almost 100 members, this process usually took me
								hours to do manually.
							</p>
							<p>
								<b>Project Details: </b>
								The project is a Python script that uses the Google Sheets API to read date from
								the roster and the All Hands attendance form. The data is stored in two lists and
								sorted in alphabetical order by members' emails. I then iterate through the lists
								to output the relevant information such as whose graduation dates I need to
								update and who I still need to send the attendance form to.
							</p>
							<p>
								I had a few incomplete and/or unsatisfactory approaches to this project when I first
								started. If you'd like to read more about those attempts, you can look at the&nbsp;
								<Link
									href="https://github.com/Stuart6557/TSE/tree/main/AH_automation/outdated"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									oudated folder
								</Link>
								&nbsp;in the GitHub repo.
							</p>
						</div>
					}
				/>
			}
		/>
	);
};