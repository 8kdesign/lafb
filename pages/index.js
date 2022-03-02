import Head from "next/head";
import Banner from "../components/home/Banner";
import Location from "../components/home/Location";
import MenuPreview from "../components/home/MenuPreview";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Love At First Bite Cafe</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta property="og:title" content="Love At First Bite Cafe" />
				<meta
					property="description"
					content="Cozy & air-conditioned cafe in Toa Payoh."
				/>
				<meta
					property="og:description"
					content="Cozy & air-conditioned cafe in Toa Payoh."
				/>
			</Head>
			<Banner />
			<div className="Buffer--50px" />
			<Location />
			<div className="Buffer--50px" />
			<MenuPreview />
		</div>
	);
}
