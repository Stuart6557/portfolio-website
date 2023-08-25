import BigCard from "@/app/components/BigCard";
import styles from './style.module.scss';

export default function LakGoodsTransport() {
	return (
		<BigCard
			backNavLink="/projects"
			title="LAK Goods Transport Application"
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