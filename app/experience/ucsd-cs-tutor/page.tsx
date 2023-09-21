import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from '../../components/BigCard/style.module.scss';
import Link from 'next/link';

export default function CSTutor() {
	return (
		<PageTemplate
			backNavLink="/experience"
			backNav="Experience"
			heading="Computer Science Tutor at UC San Diego"
			content={
				<BigCard
					content={
						<div>
							<h2>🏢 About Tutoring at UC San Diego</h2>
							<hr />
							<p>
								Undergrads are eligible to become a computer science tutor through the
								Computer Science and Engineering (CSE) Department starting their third quarter.
                A tutor assists the instructor by providing tutoring to individual students
								or small groups of students who require additional help. Other duties can
								include attending lectures/labs, proctoring exams, answering questions on
								Piazza (Q&A website), and more.
							</p>
							<p>
								CSE tutoring offers many perks such as competitive pay, networking opportunities,
								social events like potlucks, free field trips to local companies, and recruitment
								events exclusive to tutors. In case anyone's interested in becoming a tutor, you
								can learn more about the requirements and application process&nbsp;
								<Link
										href="https://cse.ucsd.edu/undergraduate/undergraduate-tutors"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										here
									</Link>!
							</p>

							<br />

							<h2>👩🏻‍💼 My Role</h2>
							<hr />
							<p>
								I applied to be a tutor through my school's Computer Science and Engineering
								Department in winter 2023 and started tutoring in spring. I tutored CSE 12
								(Basic Data Structures and Object-Oriented Design) in spring 2023 and CSE 30
								(Computer Organization and Systems Programming) in fall 2023 for Professor Cao.
								Being a tutor allows me to contribute by collaborating on creating quizzes,
								tests, and assignments and hosting tutor hours every week. I love the impact
								tutoring makes in my surrounding community, and it also helped me strengthen my
								communication skills by explaining things like memory models in a way that's
								easy to understand.
							</p>
						</div>
					}
				/>
			}
		/>
	);
};