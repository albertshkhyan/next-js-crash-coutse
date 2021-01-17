import NextNprogress from "nextjs-progressbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
	return (
		<>
			<NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
