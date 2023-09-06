import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';

export default function PortfolioWebsite() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Portfolio Website"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>🔗 Links</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://www.figma.com/file/tY9qXXLGASVxJuhw1OTwLa/Portfolio-Website-Design?type=design&node-id=0-1&mode=design&t=U1hakax0diou8lJ7-0"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Figma design
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/Stuart6557/portfolio-website"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										GitHub repo
									</Link>
								</li>
							</ul>

							<br />

							<h2>📚 Description</h2>
							<hr />
							<p>
								<b>Background: </b>
								?
							</p>
							<p>
								<b>Project Details: </b>
								?
							</p>
							<p>
								?
							</p>
						</div>
					}
				/>
			}
		/>
	);
};