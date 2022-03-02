import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ImageMeeRebus from "../../assets/meerebus.jpg";
import ImageWoosen from "../../assets/goongobwoosen.jpg";
import ImageBraised from "../../assets/braised.jpg";
import ImageNgohHiang from "../../assets/ngohhiang.jpg";
import Link from "next/link";

export default function MenuPreview() {
	return (
		<div className="Color--accent">
			<Container style={{ padding: 30 }}>
				<p
					style={{
						width: "100%",
						textAlign: "center",
						fontSize: 40,
						color: "white",
						marginBottom: 20,
					}}
				>
					Our Menu
				</p>
				<Row>
					<Cards />
				</Row>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Link href={"/menu"}>
						<div
							className="Toggle"
							style={{ background: "white", marginTop: 20 }}
						>
							<p
								className="Text--toggle"
								style={{ color: "rgba(145, 144, 105, 1)" }}
							>
								View More
							</p>
						</div>
					</Link>
				</div>
			</Container>
		</div>
	);
}

function Cards() {
	const cards = [];
	items.forEach((item) => {
		cards.push(
			<Col md={6} lg={3} style={{ padding: 10 }} key={item.name}>
				<div className="Card" style={{ height: "100%" }}>
					<Image src={item.image} />
					<div className="CardContent">
						<p
							style={{
								margin: 0,
								fontSize: 20,
								fontWeight: 700,
								color: "white",
							}}
						>
							{item.name}
						</p>
						<p
							style={{
								margin: "0px 0px 5px 0px",
								fontSize: 13,
								opacity: "75%",
								color: "white",
							}}
						>
							{item.days}
						</p>
						<p
							style={{
								margin: 0,
								fontSize: 17,
								color: "white",
							}}
						>
							{item.description}
						</p>
					</div>
				</div>
			</Col>
		);
	});
	return cards;
}

const items = [
	{
		image: ImageMeeRebus,
		name: "Mee Rebus Sugoi ~!!",
		description:
			"Singaporean favourite, with a side of hot and crispy chicken cutlet.",
		days: "*Only on Wed, Fri, Sun",
	},
	{
		image: ImageWoosen,
		name: "Goong Ob Woosen",
		description:
			"Thai shrimp and glass noodles - super favorful and pork belly a-plentiful.",
		days: "*Only on Wed, Fri, Sun",
	},
	{
		image: ImageBraised,
		name: '"BBB" Braised Belly Bowl',
		description:
			"Mouth-watering braised pork and egg on a bed of steamed rice.",
		days: "*Only on Tues, Thurs, Sat",
	},
	{
		image: ImageNgohHiang,
		name: "Ngoh Hiang Linguine",
		description:
			"Lip-smacking slices of fried pork rolls, accompanied by linguine in chef's specialty curry.",
		days: "*Only on Tues, Thurs, Sat",
	},
];
