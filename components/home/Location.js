import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import ImageStore from "../../assets/store.jpg";

export default function Location() {
	return (
		<Container>
			<Row>
				<Col
					lg={{ span: 5, offset: 1 }}
					style={{ padding: "0px 20px 0px 20px" }}
				>
					<div
						style={{
							boxShadow: "0px 0px 10px #aaaaaa",
						}}
					>
						<Image src={ImageStore} layout="responsive" priority />
					</div>
				</Col>

				<Col
					lg={{ span: 5 }}
					style={{
						padding: 20,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<p
						style={{
							fontSize: 30,
							fontWeight: 500,
							margin: 0,
						}}
					>
						Love At First Bite Cafe
					</p>
					<p style={{ fontSize: 20, margin: 0 }}>
						85 Lor 4 Toa Payoh, #01-328, Singapore 310085
					</p>
					<p
						style={{
							fontSize: 15,
							margin: "10px 0px 20px 0px",
							opacity: "70%",
						}}
					>
						Opening Hours: Tue-Sun, 11:30am to 8pm
					</p>
					<div className="Toggle" style={{ background: "black" }}>
						<a
							className="Text--toggle"
							href="https://www.google.com/maps/place/Love+At+First+Bite+Cafe+Toa+Payoh/@1.3362442,103.8489013,15z/data=!4m5!3m4!1s0x0:0x2dc43e909f1ebd5a!8m2!3d1.3362442!4d103.8489013"
							target="_blank"
							rel="noreferrer"
						>
							Open in Maps
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
