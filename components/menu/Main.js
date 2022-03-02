import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import ImageMeeRebus from "../../assets/meerebus.jpg";
import ImageWoosen from "../../assets/goongobwoosen.jpg";
import ImageOxtail from "../../assets/oxtail.jpg";
import ImagePenne from "../../assets/penne.jpg";
import ImageBraised from "../../assets/braised.jpg";
import ImageNgohHiang from "../../assets/ngohhiang.jpg";
import ImageChicken from "../../assets/chicken.jpg";
import ImageSkewers from "../../assets/skewers.jpg";

export default function Main() {
	return (
		<>
			<div
				className="Color--accent"
				style={{ padding: "50px 0px 50px 0px" }}
			>
				<Container>
					<p
						style={{
							width: "100%",
							fontSize: 40,
							margin: 0,
							color: "white",
						}}
					>
						Our Menu
					</p>
				</Container>
			</div>
			<Container>
				<div className="Buffer--50px" />
				<p
					style={{
						width: "100%",
						fontSize: 25,
						marginBottom: 20,
						fontWeight: 500,
					}}
				>
					Mains - Wednesday, Friday & Sunday
				</p>
				<Cards items={oddItems} />
				<div className="Line" />
				<p
					style={{
						width: "100%",
						fontSize: 25,
						marginBottom: 20,
						fontWeight: 500,
					}}
				>
					Mains - Tuesday, Thursday & Saturday
				</p>
				<Cards items={evenItems} />
				<div className="Line" />
				<div className="Buffer--50px" />
			</Container>
		</>
	);
}

function Cards({ items }) {
	const itemArray = [];
	items.forEach((item) => {
		itemArray.push(
			<Col md={6} lg={3} style={{ padding: 10 }} key={item.name}>
				<div className="Card--menu">
					<Image src={item.image} layout="responsive" />
					<p
						style={{
							margin: "10px 0px 0px 0px",
							fontSize: 20,
							fontWeight: 700,
						}}
					>
						{item.name}
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
			</Col>
		);
	});
	return <Row>{itemArray}</Row>;
}

const oddItems = [
	{
		name: "Butter Creamy Chicken Penne",
		description:
			"Western roasted chicken and pasta in a sea of rich, spinachy gravy.",
		image: ImagePenne,
	},
	{
		name: "Goong Ob Woonsen",
		description:
			"Thai shrimp and glass noodles - super favorful and pork belly a-plentiful.",
		image: ImageWoosen,
	},
	{
		name: "Mum-in-Law's Oxtail Soup",
		description:
			"Indonesian Sop Buntut boiled to tenderness on a family recipe that's been passed down generations. Served with rice.",
		image: ImageOxtail,
	},
	{
		name: "Mee Rebus Sugoi ~!!",
		description:
			"Singaporean favourite, with a side of hot and crispy chicken cutlet.",
		image: ImageMeeRebus,
	},
];

const evenItems = [
	{
		name: "Ngoh Hiang Linguine",
		description:
			"Lip-smacking slices of fried pork rolls, accompanied by linguine in chef's specialty curry.",
		image: ImageNgohHiang,
	},
	{
		name: "Chicken Little",
		description:
			"Nothing little about this generous serving of chicken cutlet, coleslaw, cheese fries and sautéed shiitake mushrooms.",
		image: ImageChicken,
	},
	{
		name: "Lollipork Curry Chicken",
		description:
			"Pork belly skewers dunked in a hearty pot of curry chicken, potato and more. Served with rice.",
		image: ImageSkewers,
	},
	{
		name: "'BBB' Braised Belly Bowl",
		description:
			"Mouth-watering braised pork and egg on a bed of steamed rice.",
		image: ImageBraised,
	},
];
