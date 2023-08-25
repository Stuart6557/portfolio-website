import { ReactElement } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';

interface BigCardProps {
  backNavLink: string;
  title: string;
  content: ReactElement;
}

export default function BigCard({backNavLink, title, content}: BigCardProps) {
	return (
		<main className={styles.main}>
			<div className={styles.navContainer}>
				<Link href={backNavLink} className={styles.link}>&lt; Back</Link>
			</div>
			<h1>{title}</h1>
			<div className={styles.bigCard}>
				{content}
			</div>
		</main>
	);
};