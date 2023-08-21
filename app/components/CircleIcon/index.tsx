import { ReactNode } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'

interface CircleIconProps {
  link: string;
  icon: ReactNode;
	description: string;
}

export default function CircleIcon({link, icon, description}: CircleIconProps) {
	return (
		<div className={styles.circleicon}>
			<a
				className={styles.circlebutton}
				href={link}
				target="_blank"
				rel="noopener, noreferrer"
			>
				{icon}
			</a>
			<div className={styles.iconDescription}>
				<Link href={link} className={styles.link}>{description}</Link>
			</div>
		</div>
	)
}