import styles from './page.module.scss'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import CircleIcon from './components/CircleIcon';

const links = [
	{link: 'https://www.linkedin.com/in/vivian-liu-336148202/', icon: <FaLinkedinIn />},
	{link: 'https://github.com/Stuart6557', icon: <FaGithub />},
	{link: 'mailto:v6liu@ucsd.edu', icon: <FaEnvelope /> }
];

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Hi, I'm Vivian Liu 🤚</h1>
			{/* <h2>I am a food lover...</h2> */}

			<div className={styles.iconContainer}>
				{links.map(({link, icon}, index) => (
					<CircleIcon
						link={link}
						icon={icon}
						key={`${link}-${index}`}
					/>
				))}
			</div>
		</main>
	)
}
