import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function EventQrGenerator() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Event QR Code Generator"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>🔗 Links</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://www.figma.com/file/Iyc2BzYEBFjg2fLjC2ZRRQ/QR-Code-iPad-Checkin?type=design&node-id=0-1&mode=design&t=w1u2YRpOIIktPjvm-0"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										Figma design
									</Link>
								</li>
								<li>
									BreadBot&nbsp;
									<Link
										href="https://github.com/acmucsd/discord-bot"
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
							<div className={styles.images}>
								<div className={styles.banquetDisplayContainer}>
									<Image
										fill={true}
										src="/projects/event-qr-code-generator/banquet-display.png"
										alt="Banquet Display"
										className={styles.image}
									/>
								</div>
								<div className={styles.checkinCommandContainer}>
									<Image
										fill={true}
										src="/projects/event-qr-code-generator/checkin-command.png"
										alt="Command Demo"
										className={styles.image}
									/>
								</div>
								<div className={styles.revampAnnouncementContainer}>
									<Image
										fill={true}
										src="/projects/event-qr-code-generator/revamp-announcement.png"
										alt="Revamp Announcement"
										className={styles.image}
									/>
								</div>
							</div>

							<br />

							<h2>📚 Description</h2>
							<hr />
							<p>
								<b>Background: </b>
								The Event QR Code Generator was the main project I worked on during
								my time as an ACM Diamond Staff member (you can read more about my
								ACM experience&nbsp;
								<Link href="/experience/acm-ucsd" className={styles.link}>
										here
								</Link>
								.) I built this tool for Breadbot, one of two Discord bots ACM had at
								the time I completed this project. ACM hosts a lot of events, workshops,
								and socials, and we wanted a way for attendees to easily check into these
								events by scanning a QR code when they first arrive so they can earn
								membership points to purchase ACM merch with. Although ACM had a QR code
								generator already, it was just a simple black and white QR code and wasn't
								very visually appealing. I aimed to completely revamp this tool and create
								something that would pop at the check-in table.
							</p>
							<p>
								<b>Project Details: </b>
								To generate a QR code for an event, members can run the <em>/checkin</em>
								&nbsp;command on ACM's Discord server. The revamped version generates a
								colorful QR code on a slide and displays the event name and event check-in
								code (the code can be used to manually check in through the ACM
								Membership Portal.) I programmed the bot in TypeScript with discord.js,
								easyqrcodejs-nodejs, and canvas.
							</p>
							<p>
								My biggest takeaway from this project was a deeper understanding of
								asynchronous functions. I knew about this topic beforehand but wasn't
								too familiar with it, so I ended up being stuck for a long time on a bug
								where I wasn't waiting for an async function to finish running. Knowing
								more about async functions helped me identify similar issues on multiple
								other occasions, such as a bug in the&nbsp;
								<Link href="/projects/lak-goods-transport" className={styles.link}>
									LAK Goods Transport App
								</Link>
								&nbsp;that caused users to have to click the login button twice to sign in.
							</p>
						</div>
					}
				/>
			}
		/>
	);
};