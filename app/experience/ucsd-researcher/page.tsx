import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from '../../components/BigCard/style.module.scss';
import Link from 'next/link';

export default function ERSP() {
	return (
		<PageTemplate
			backNavLink="/experience"
			backNav="Experience"
			heading="Student Researcher at UC San Diego"
			content={
				<BigCard
					content={
						<div>
							<h2>🏢 About My Research Program</h2>
							<hr />
							<p>
								I am conducting research through the Early Research Scholars Program
								(ERSP), a yearlong program for computer science and engineering majors
								in their second year. The program aims to address underrepresentation
								of minority students in the field.
							</p>
							<p>
								If you're interested in learning more about ERSP, you can do so&nbsp;
								<Link
									href="https://ersp.eng.ucsd.edu"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
										here
								</Link>.
							</p>

							<br />

							<h2>👩🏻‍💼 My Role</h2>
							<hr />
							<p>
								I applied to UC San Diego's Early Research Scholars Program in spring 2023 and
								was accepted into the 2023-2024 cohort. I'm starting my research project in the
								fall so stay tuned!
							</p>
						</div>
					}
				/>
			}
		/>
	);
};