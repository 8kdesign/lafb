import { Container, Row, Col } from "react-bootstrap";

export default function Drinks() {
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
						Drinks
					</p>
				</Col>
				<Col lg={{ span: 9, offset: 1 }} style={{ padding: 0 }}>
					<Cards items={drinks} />
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
			<Col
				md={6}
				lg={6}
				key={item.name}
				style={{ padding: "10px 20px 10px 20px" }}
			>
				<p
					style={{
						margin: "20px 0px 0px 0px",
						fontSize: 20,
						fontWeight: 700,
					}}
				>
					{item.name}
				</p>
				<TemperatureLabels hot={item.hot} cold={item.cold} />
				<ListOptions list={item.options} />
			</Col>
		);
	});
	return <Row>{itemArray}</Row>;
}

const drinks = [
	{
		name: "Cappuccino",
		hot: true,
		cold: false,
		options: null,
	},
	{
		name: "Latte",
		hot: true,
		cold: true,
		options: null,
	},
	{
		name: "Americano",
		hot: true,
		cold: true,
		options: null,
	},
	{
		name: "Espresso",
		hot: true,
		cold: false,
		options: null,
	},
	{
		name: "Tea",
		hot: true,
		cold: false,
		options: ["Ceylon Black Tea", "Earl Grey Blue Cornflower"],
	},
	{
		name: "Nectar Soda",
		hot: false,
		cold: true,
		options: ["Passion Fruit", "Calpis", "Mango", "Soursop"],
	},
	{
		name: "Mineral Water",
		hot: false,
		cold: true,
		options: null,
	},
];

function TemperatureLabels({ hot, cold }) {
	const itemArray = [];
	if (hot) {
		itemArray.push(
			<p
				style={{
					padding: "2px 10px 2px 10px",
					marginBottom: 0,
					marginRight: 5,
					background: "#d65f45",
					color: "white",
					borderRadius: 30,
					fontSize: 13,
					fontWeight: 500,
				}}
			>
				Hot
			</p>
		);
	}
	if (cold) {
		itemArray.push(
			<p
				style={{
					padding: "2px 10px 2px 10px",
					margin: 0,
					background: "#439ad9",
					color: "white",
					borderRadius: 30,
					fontSize: 13,
					fontWeight: 500,
				}}
			>
				Cold
			</p>
		);
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				marginTop: 5,
				marginBottom: 5,
			}}
		>
			{itemArray}
		</div>
	);
}

function ListOptions({ list }) {
	if (list === undefined || list === null) return null;
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
