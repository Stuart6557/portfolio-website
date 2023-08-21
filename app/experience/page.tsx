import styles from './page.module.scss';
import { cards } from './cards';
import SmallCard from '../components/SmallCard';

export default function Experience() {
	return (
		<main className={styles.main}>
			<h1>Experience</h1>
			<div className={styles.cardContainer}>
				{cards.map(({link, imgSrc, imgAlt, title, description}, index) => (
					<SmallCard
						link={link}
						imgSrc={imgSrc}
						imgAlt={imgAlt}
						title={title}
						description={description}
						key={`${link}-${index}`}
					/>
				))}
			</div>
		</main>
	);
};