import { ReactElement } from 'react';
import styles from './style.module.scss';

interface BigProjectCardProps {
  content: ReactElement;
}

export default function BigProjectCard({content}: BigProjectCardProps) {
	return (
		<div className={styles.bigProjectCard}>
			{content}
		</div>
	);
};