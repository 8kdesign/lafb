import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ImageMeeRebus from "../../assets/meerebus.jpg";
import ImageWoosen from "../../assets/goongobwoosen.jpg";
import ImageBraised from "../../assets/braised.jpg";
import ImageNgohHiang from "../../assets/ngohhiang.jpg";
import Link from "next/link";

export default function MenuPreview() {
	return (
		<Container>
			<div className="Line" />
			<div className="Buffer--50px" />

			<p
				style={{
					width: "100%",
					textAlign: "center",
					fontSize: 40,
					marginBottom: 20,
					fontWeight: 500,
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
					<div className="Toggle" style={{ marginTop: 20 }}>
						<p className="Text--toggle">View More</p>
					</div>
				</Link>
			</div>
		</Container>
	);
}

function Cards() {
	const cards = [];
	items.forEach((item) => {
		cards.push(
			<Col sm={6} lg={3} style={{ padding: 10 }} key={item.name}>
				<div
					style={{
						height: "100%",
						width: "100%",
						overflow: "hidden",
					}}
				>
					<Image src={item.image} />
					<div
						style={{
							padding: "0px 20px 15px 20px",
						}}
					>
						<p
							style={{
								margin: 0,
								fontSize: 20,
								fontWeight: 700,
							}}
						>
							{item.name}
						</p>
						<p
							style={{
								margin: "0px 0px 5px 0px",
								fontSize: 13,
								fontWeight: 500,
							}}
						>
							{item.days}
						</p>
						<p
							style={{
								margin: 0,
								fontSize: 17,
								opacity: "75%",
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
		name: "'BBB' Braised Belly Bowl",
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
