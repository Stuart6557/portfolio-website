import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { prefix } from '@/app/prefix';

export default function LakGoodsTransport() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="LAK Goods Transport Application"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>🔗 Links</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://www.figma.com/file/LEjIuAppU8eT4SlcMjgChF/LAAKTA-Goods-Transport?type=design&node-id=249-828&mode=design&t=QdeVisYWuyHWYoFa-0"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Figma design
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/TritonSE/LAK-Goods-Transport-Application"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										GitHub repo
									</Link>
								</li>
							</ul>

							<br />

							<h2>🖼️ Images</h2>
							<hr />
							<div className={styles.appImages}>
								<div className={styles.driverRegistrationContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/lak-goods-transport/driver-registration.png`}
										alt="Driver registration screen"
									/>
								</div>
								<div className={styles.profileContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/lak-goods-transport/profile.png`}
										alt="Profile screen"
									/>
								</div>
								<div className={styles.noCurrentJobsContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/lak-goods-transport/no-current-jobs.png`}
										alt="No current jobs screen"
									/>
								</div>
								<div className={styles.noAvailableJobsContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/lak-goods-transport/no-available-jobs.png`}
										alt="No available jobs screen"
									/>
								</div>
								<div className={styles.findJobsContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/lak-goods-transport/find-jobs.png`}
										alt="Find jobs screen"
									/>
								</div>
							</div>
							<div className={styles.adminPortalImages}>
								<div className={styles.driverVerificationContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/lak-goods-transport/admin-portal-driver-verification.png`}
										alt="Admin portal driver verification screen"
									/>
								</div>
								<div className={styles.adminPortalProfileContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/lak-goods-transport/admin-portal-profile.png`}
										alt="Admin portal profile screen"
									/>
								</div>
							</div>

							<br />

							<h2>📚 Description</h2>
							<hr />
							<p>
								<b>Background: </b>
								This is a project that I worked on for the nonprofit&nbsp;
								<Link href="https://laktaa.medium.com"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									Laktaa Bhutan
								</Link>
								&nbsp;(formerly FirstMile Bhutan) during my time as a developer in
								Triton Software Engineering (you can read more about my Triton Software
								Engineering experience&nbsp;
								<Link href="/experience/triton-software-engineering" className={styles.link}>
										here
								</Link>
								). Laktaa is a non-profit logistics brokerage for Bhutan aiding farmers
								with transporting their goods. Due to poor transportation infrastructure,
								farmers are limited in the prices at which and the people to which they can
								sell their produce. Therefore, we built an app that connects farmers to truck
								drivers who can deliver their goods to markets and other destinations.
							</p>
							<p>
								<b>Project Details: </b>
								There are two parts to this project: a mobile application and a web
								administrative portal. The mobile app allows for farmers and drivers to
								sign up and post/apply to delivery jobs. The admin portal is used for
								approving prospective drivers and suspending accounts as necessary.
							</p>
							<p>
								I collaborated in a group designers and developers to make this app. I mainly
								worked on the frontend for the mobile app, building screens such as the
								Driver Registration screen and the No Jobs screen. For the admin portal, I
								worked on Firebase authentication after learning how to do so at LA Hacks 2023.
								I learned a lot about frontend, good styling practices, and the Agile workflow.
							</p>
						</div>
					}
				/>
			}
		/>
	);
};