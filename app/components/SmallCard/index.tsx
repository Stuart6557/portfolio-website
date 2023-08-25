import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';

interface SmallCardProps {
  link: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
	date: string;
	description: string;
}

export default function SmallCard({
	link,
	imgSrc,
	imgAlt,
	title,
	date,
	description
}: SmallCardProps) {
	return (
		<Link href={link} className={styles.link}>
			<div className={styles.smallCard}>
				<div className={styles.imgDiv}>
					<div className={styles.imgContainer}>
						<Image fill={true} sizes='100vw' src={imgSrc} alt={imgAlt} className={styles.image} />
					</div>
				</div>
				<div className={styles.description}>
					<h2>
						{title}
					</h2>
					<h3>
						{date}
					</h3>
					<p>
						{description}
					</p>
					<br />
				</div>
			</div>
		</Link>
	);
};