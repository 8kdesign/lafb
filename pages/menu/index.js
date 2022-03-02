import Head from "next/head";
import Main from "../../components/menu/Main";

export default function Menu() {
	return (
		<>
			<Head>
				<title>Menu | Love At First Bite Cafe</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					property="og:title"
					content="Menu | Love At First Bite Cafe"
				/>
				<meta
					property="description"
					content="Cozy & air-conditioned cafe in Toa Payoh."
				/>
				<meta
					property="og:description"
					content="Cozy & air-conditioned cafe in Toa Payoh."
				/>
			</Head>
			<Main />
			<div className="Buffer--50px" />
		</>
	);
}
