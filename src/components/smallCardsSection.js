import styles from '../styles/SmallCardsSection.module.css';

export default function SmallCardsSection(props) {
	const cardData = props.data;

	return (
		<div className={styles.smallCardsSection}>
			<h1>{props.title}</h1>

			<div className={styles.smallCardContainer}>
				{cardData.map(card =>
					<div className={styles.smallCard} key={card.id}>
						<h2>{card.title}</h2>
					</div>)}
			</div>


			{/* <div className={styles.smallCardContainer}>
				<div className={styles.smallCard}>
				</div>

				<div className={styles.smallCard}>
				</div>

				<div className={styles.smallCard}>
				</div>

				<div className={styles.smallCard}>
				</div>

				<div className={styles.smallCard}>
				</div>

				<div className={styles.smallCard}>
        </div>
			</div> */}
		</div>
	);
}
