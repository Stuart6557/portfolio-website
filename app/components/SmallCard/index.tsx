import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';

interface CircleIconProps {
  link: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
	description: string;
}

export default function SmallCard({link, imgSrc, imgAlt, title, description}: CircleIconProps) {
	return (
		<Link href={link}>
			<div className={styles.smallCard}>
				<div className={styles.imgDiv}>
					<div className={styles.imgContainer}>
						<Image fill={true} src={imgSrc} alt={imgAlt} className={styles.image} />
						{/* <img src={imgSrc} alt={imgAlt} /> */}
					</div>
				</div>
				<div>
					<h3>
						{title}
					</h3>
					<p>
						{description}
					</p>
				</div>
			</div>
		</Link>
	);
};