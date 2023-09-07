import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';

interface CircleIconProps {
  link: string;
  icon: ReactNode;
	description: string;
}

export default function CircleIcon({link, icon, description}: CircleIconProps) {
	return (
		<div className={styles.circleIcon}>
			<Link
				className={styles.circleButton}
				href={link}
				target="_blank"
				rel="noopener noreferrer"
			>
				{icon}
			</Link>
			<div className={styles.iconDescription}>
				{description}
			</div>
		</div>
	);
};