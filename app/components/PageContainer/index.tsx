import { ReactElement } from 'react';
import styles from './styles.module.scss';

interface PageContainerProps {
  content: ReactElement;
}

/**
 * Container used for every single page. Has side margins and top margin to
 * account for navbar.
 */
export default function PageContainer({content}: PageContainerProps) {
	return (
		<main className={styles.main}>
			<div className={styles.content}>
				{content}
			</div>
		</main>
	);
};