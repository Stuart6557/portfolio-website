import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function CSTutor() {
	return (
		<BigCard
			backNavLink="/experience"
			title="Computer Science Tutor at UC San Diego"
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