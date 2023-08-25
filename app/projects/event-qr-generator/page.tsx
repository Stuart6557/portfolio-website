import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function EventQrGenerator() {
	return (
		<BigCard
			backNavLink="/projects"
			title="Event QR Code Generator"
			content={
				<div className={styles.content}>
					<p>
						This page is still in progress. Stay tuned :)
					</p>
				</div>
			}
		/>
	);
};