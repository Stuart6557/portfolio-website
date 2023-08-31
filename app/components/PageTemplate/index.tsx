import { ReactElement } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import PageContainer from '../PageContainer';

interface PageTemplateProps {
	backNavLink?: string;
	heading: string;
  content: ReactElement;
}

/**
 * Component used for every page except the home page since format is quite
 * consistent across pages.
 */
export default function PageTemplate({backNavLink, heading, content}: PageTemplateProps) {
	return (
		<PageContainer
			content={
				<div className={styles.pagetemplate}>
					{backNavLink && 
						<div className={styles.navContainer}>
							<Link href={backNavLink} className={styles.link}>&lt; Back</Link>
						</div>
					}
					<h1>{heading}</h1>
					{content}
				</div>
			}
		/>
	);
};