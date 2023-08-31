import styles from './page.module.scss';
import { cards } from './cards';
import ExperienceCard from '../components/ExperienceCard';
import PageTemplate from '../components/PageTemplate';

export default function Experience() {
	return (
		<PageTemplate
			heading='Experience'
			content={
				<div className={styles.cardContainer}>
					{cards.map(({link, imgSrc, imgAlt, role, company, date}, index) => (
						<ExperienceCard
							link={link}
							imgSrc={imgSrc}
							imgAlt={imgAlt}
							role={role}
							company={company}
							date={date}
							key={`${link}-${index}`}
						/>
					))}
				</div>
			}
		/>
	);
};