import Head from "next/head";
import { Container } from "react-bootstrap";
import Desserts from "../../components/menu/Desserts";
import Drinks from "../../components/menu/Drinks";
import Instagram from "../../components/menu/Instagram";
import Main from "../../components/menu/Main";
import Sides from "../../components/menu/Sides";

export default function Menu() {
	return (
		<div style={{ background: "white" }}>
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
			<div style={{ height: 77, width: "100%" }} />
			<div
				className="Color--accent"
				style={{ padding: "50px 0px 50px 0px" }}
			>
				<Container>
					<p
						style={{
							fontSize: 40,
							margin: 20,
							color: "white",
							fontWeight: 500,
						}}
					>
						Our Menu
					</p>
				</Container>
			</div>
			<Container>
				<div className="Buffer--50px" />
				<Desserts />
				<div className="Line" />
				<Drinks />
				<div className="Line" />
				<Main />
				<div className="Line" />
				<Sides />
				<div className="Buffer--50px" />
			</Container>
			<Instagram />
		</div>
	);
}
