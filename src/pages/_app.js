import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Vivian Liu</title>
				{/* <link rel="shortcut icon" sizes="32x32" href="favicon.ico" /> */}
			</Head>

			<Component {...pageProps} />
		</>
	);
}
