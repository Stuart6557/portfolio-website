import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';

interface ExperienceCardProps {
  link: string;
  imgSrc: string;
  imgAlt: string;
  role: string;
	company: string;
	date: string;
}

export default function ExperienceCard({
	link,
	imgSrc,
	imgAlt,
	role,
	company,
	date
}: ExperienceCardProps) {
	return (
		<Link href={link} className={styles.link}>
			<div className={styles.experienceCard}>
				<div className={styles.imgDiv}>
					<div className={styles.imgContainer}>
						<Image fill={true} sizes='100vw' src={imgSrc} alt={imgAlt} className={styles.image} />
					</div>
				</div>
				<div className={styles.description}>
					<h2>
						{role}
					</h2>
					<h3>
						{company}
					</h3>
					<p>
						{date}
					</p>
					<br />
				</div>
			</div>
		</Link>
	);
};