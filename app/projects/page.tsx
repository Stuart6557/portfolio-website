import styles from './page.module.scss';
import { cards } from './cards';
import SmallCard from '../components/SmallCard';

export default function Page() {
	return (
		<main className={styles.main}>
			<h1>Projects</h1>
			<div className={styles.cardContainer}>
				{cards.map(({link, imgSrc, imgAlt, title, date, description}, index) => (
					<SmallCard
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
		</main>
	);
};