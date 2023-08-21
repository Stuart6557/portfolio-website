import { ReactNode } from 'react'
import styles from './style.module.scss'

interface CircleIconProps {
  link: string;
  icon: ReactNode;
}

export default function CircleIcon({link, icon}: CircleIconProps) {
	return (
		<a
			className={styles.circleicon}
			href={link}
			target="_blank"
			rel="noopener, noreferrer"
		>
			{icon}
		</a>
	)
}