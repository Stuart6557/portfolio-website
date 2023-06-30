import { useEffect, useRef } from 'react';
// import particlesJS from 'particlesjs';
// import Particles from 'particlesjs';
import styles from '../styles/Background.module.css';

export default function Background () {
	// const particlesRef = useRef(null);

	// useEffect(() => {
	//   /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	//   particlesJS.load('particles-js', '../../public/assets/particles.json');
	// }, []);

	return (
		<>
			{/* <div ref={particlesRef} className={styles.background}></div> */}
			{/* <div id='particles-js' className={styles.background}></div> */}
			<div className={styles.background}></div>
		</>
	);
};
