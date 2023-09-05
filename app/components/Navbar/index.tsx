import Link from "next/link";
import styles from './styles.module.scss';
import { prefix } from "@/app/prefix";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div>
				<Link href="/" className={styles.link}>Home</Link>
			</div>
			<div>
				<Link href="/about" className={styles.link}>About</Link>
			</div>
			<div>
				<Link href="/experience" className={styles.link}>Experience</Link>
			</div>
			<div>
				<Link href="/projects" className={styles.link}>Projects</Link>
			</div>
			<div>
				<Link href={`${prefix}/resume.pdf`} target="_blank" className={styles.link}>Resume</Link>
			</div>
		</nav>
	);
};