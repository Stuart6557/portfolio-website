import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';

interface ProjectCardProps {
  link: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
	date: string;
	description: string;
}

export default function ProjectCard({
	link,
	imgSrc,
	imgAlt,
	title,
	date,
	description
}: ProjectCardProps) {
	return (
		<Link href={link} className={styles.link}>
			<div className={styles.ProjectCard}>
				<div className={styles.cardContent}>
					{/* Need this nested imgContainer div here because otherwise the Image
					fill property would cause the img to not leave a whitespace around it */}
					<div className={styles.imgContainer}>
						<Image fill={true} sizes='100vw' src={imgSrc} alt={imgAlt} className={styles.image} />
					</div>
					<div className={styles.description}>
						<h2>{title}</h2>
						<h3>{date}</h3>
						<p>{description}</p>
						<br />
					</div>
				</div>
			</div>
		</Link>
	);
};