import styles from './page.module.scss';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import CircleIcon from './components/CircleIcon';

const links = [
	{
		link: 'https://www.linkedin.com/in/vivian-liu-336148202/',
		icon: <FaLinkedinIn />,
		description: 'LinkedIn'
	},
	{
		link: 'https://github.com/Stuart6557',
		icon: <FaGithub />,
		description: 'GitHub'
	},
	{
		link: 'mailto:v6liu@ucsd.edu',
		icon: <FaEnvelope />,
		description: 'Email'
	 }
];

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Hi, I'm Vivian Liu 🤚</h1>
			<h2>This site is still a work in progress, but feel free to look around :)</h2>
			{/* <h2>I am a food lover...</h2> */}

			<div className={styles.iconContainer}>
				{links.map(({link, icon, description}, index) => (
					<CircleIcon
						link={link}
						icon={icon}
						description={description}
						key={`${link}-${index}`}
					/>
				))}
			</div>
		</main>
	);
};