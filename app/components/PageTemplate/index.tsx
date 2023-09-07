import { ReactElement } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import PageContainer from '../PageContainer';

interface PageTemplateProps {
	backNavLink?: string;
	backNav?: string;
	heading: string;
  content: ReactElement;
}

/**
 * Component used for every page except the home page since format is quite
 * consistent across pages.
 */
export default function PageTemplate({backNavLink, backNav, heading, content}: PageTemplateProps) {
	return (
		<PageContainer
			content={
				<div className={styles.pagetemplate}>
					{backNavLink && backNav &&
						<div className={styles.navContainer}>
							<Link href={backNavLink} className={styles.link}>&lt; {backNav}</Link>
						</div>
					}
					<h1>{heading}</h1>
					{content}
				</div>
			}
		/>
	);
};