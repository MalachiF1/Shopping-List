import '../public/static/css/styles.css';
import 'rc-checkbox/assets/index.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
