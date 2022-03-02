import { Container, Col, Row } from "react-bootstrap";

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
						Sides
					</p>
				</Col>
				<Col lg={{ span: 9, offset: 1 }} style={{ padding: 0 }}>
					<Cards items={sides} />
				</Col>
			</Row>
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
				<p
					style={{
						margin: 0,
						fontSize: 17,
						opacity: "75%",
					}}
				>
					{item.description}
				</p>
			</Col>
		);
	});
	return <Row>{itemArray}</Row>;
}

const sides = [
	{
		name: "Coleslaw",
		description: "",
	},
	{
		name: "Cheese Fries",
		description: "",
	},
	{
		name: "Cheesy Chicken Chunks",
		description: "Secret recipe boneless fried chicken coated in cheese.",
	},
	{
		name: "Korokke",
		description: "Japanese potato and bacon croquette.",
	},
	{
		name: "Ngoh Hiang",
		description: "Chinese pork rolls in deep-fried beancurd skin.",
	},
	{
		name: "Nam Yu Belly",
		description:
			"Hakka 'Zhar Yoke' - pork marinated in fermented red beancurd and deep-fried.",
	},
];
