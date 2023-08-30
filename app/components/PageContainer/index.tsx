import { ReactElement } from 'react';
import styles from './styles.module.scss';

interface PageProps {
  content: ReactElement;
}

export default function PageContainer({content}: PageProps) {
	return (
		<main className={styles.main}>
			<div className={styles.content}>
				{content}
			</div>
		</main>
	);
};