import App from './_app.js';
import Script from 'next/script';
import Background from '../components/background.js';
import Landing from '../components/landing';
import Navbar from '../components/navbar.js';
import LargeCardSection from '../components/largeCardSection.js';
import SmallCardsSection from '../components/smallCardsSection.js';
import Footer from '../components/footer.js';

export default function Home(props) {
	const projects = props.projects;

	return (
		<>
			{/* figure this particle stuff out later cuz this is wrong */}
			{/* <div className={styles.background}>
        <div>
          <div id="particles-js"></div>
          <script src="particles.js"></script>
        </div>
			</div>
      <script src="particles.js"></script> */}

			<Navbar />

			<Background />

			<Landing />
			<LargeCardSection />
			<SmallCardsSection title='Experience' data={projects} />
			<SmallCardsSection title='Projects' data={projects} />
			<LargeCardSection />
			<Footer />
      
			{/* <Script src='../../public/assets/app.js' /> */}
			<Script src={path.join(process.cwd(), 'public/assets/app.js')} />
			{/* <Script src='../../public/assets/particles.min.js' /> */}
			<Script src={path.join(process.cwd(), 'public/assets/particles.min.js')} />
		</>
	)
}

// get back to this: https://www.slingacademy.com/article/next-js-read-and-display-data-from-a-local-json-file/
// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'public/assets/sectionsData.json');
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);

	return {
		props: objectData
	}
}