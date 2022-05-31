import Head from "next/head";
import { Container } from "react-bootstrap";
import Banner from "../components/home/Banner";
import Location from "../components/home/Location";
import MenuPreview from "../components/home/MenuPreview";

export default function Home() {
	return (
		<div>
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					backgroundImage: 'url("./banner.jpg")',
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
					width: "100%",
					zIndex: -100,
				}}
			>
				&nbsp;
			</div>
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
			<div style={{ background: "white" }}>
				<div className="Buffer--50px" />
				<Location />
				<div className="Buffer--50px" />
				<Container>
					<div className="Line" />
				</Container>
				<div className="Buffer--50px" />
				<MenuPreview />
				<div className="Buffer--50px" />
			</div>
		</div>
	);
}
