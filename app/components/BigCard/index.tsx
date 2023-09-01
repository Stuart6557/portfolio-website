import { ReactElement } from 'react';
import styles from './style.module.scss';

interface BigCardProps {
  content: ReactElement;
}

export default function BigCard({content}: BigCardProps) {
	return (
		<div className={styles.bigCard}>
			{content}
		</div>
	);
};