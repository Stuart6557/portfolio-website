import styles from './page.module.scss';
import { cards } from './cards';
import ProjectCard from '../components/ProjectCard';
import PageTemplate from '../components/PageTemplate';

export default function Projects() {
	return (
		<PageTemplate
			heading='Projects'
			content={
				<div className={styles.cardContainer}>
					{cards.map(({link, imgSrc, imgAlt, title, date, description}, index) => (
						<ProjectCard
							link={link}
							imgSrc={imgSrc}
							imgAlt={imgAlt}
							title={title}
							date={date}
							description={description}
							key={`${link}-${index}`}
						/>
					))}
				</div>
			}
		></PageTemplate>
	);
};