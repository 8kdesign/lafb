import { Container, Col, Row } from "react-bootstrap";
import { NutFill } from "react-bootstrap-icons";

export default function () {
	return (
		<Container>
			<Row style={{ margin: 0, padding: 20 }}>
				<Col
					lg={2}
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						padding: 0,
					}}
				>
					<p
						style={{
							width: "100%",
							fontSize: 35,
							marginBottom: 0,
							fontWeight: 500,
						}}
					>
						Desserts
					</p>
				</Col>
				<Col lg={{ span: 9, offset: 1 }} style={{ padding: 0 }}>
					<Cards items={desserts} />
				</Col>
			</Row>
			<div className="Line" />
		</Container>
	);
}

function Cards({ items }) {
	const itemArray = [];
	items.forEach((item) => {
		itemArray.push(
			<Col md={6} lg={6} key={item.name} style={{ padding: 10 }}>
				<p
					style={{
						margin: "20px 0px 0px 0px",
						fontSize: 20,
						fontWeight: 700,
					}}
				>
					{item.name}
				</p>
				{item.description.length <= 0 ? null : (
					<p
						style={{
							margin: 0,
							fontSize: 17,
							opacity: "75%",
						}}
					>
						{item.description}
					</p>
				)}
				<ListOptions list={item.options} />
			</Col>
		);
	});
	return <Row>{itemArray}</Row>;
}

function ListOptions({ list }) {
	if (list === undefined || list === null) return null;
	console.log(list);
	const itemArray = [];
	list.forEach((item) => {
		itemArray.push(
			<Col xs={12} sm={6}>
				<p style={{ margin: 0 }}>• {item}</p>
			</Col>
		);
	});
	return <Row>{itemArray}</Row>;
}

const desserts = [
	{
		name: "Mr. Waffle & Mrs Gelato (Half/Full)",
		description:
			"2 scoops Hokkaido gelato on a warm buttermilk Belgium waffle, drizzled with chocolate, strawberry or maple syrup.",
		options: null,
	},
	{
		name: "Hokkaido Soft Serve",
		description: "Availability depends on flavour of the day.",
		options: ["Fresh Milk", "Yubari Melon", "Matcha"],
	},
	{
		name: "Hokkaido Gelato (Scoop)",
		description: "",
		options: [
			"Rum & Raisin",
			"Matcha",
			"Cookies 'n' Cream",
			"Roasted Black Sesame",
		],
	},
	{
		name: "Hokkaido Gelato (Pre-Packed)",
		description: "",
		options: [
			"Rich Chocolate",
			"Fresh Milk",
			"Okhotsk Salt (Sea Salt)",
			"Yubari Melon",
			"Golden Vanilla",
			"Cream Cheese",
			"Grape (Sherbet)",
			"Prune (Sherbet)",
			"Tokachi Azuki (Sherbet)",
		],
	},
	{
		name: "Seasonal Cake",
		description: "Please check with our staff.",
		options: null,
	},
	{
		name: "Hokkaido Swiss Roll",
		description: "",
		options: ["Anko & Butter (Red Bean)", "Cream Roll", "Camembert Cheese"],
	},
];
