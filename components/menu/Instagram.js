import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import ImageQR from "../../assets/qr.jpg";

export default function Instagram() {
	return (
		<div className="Color--instagram">
			<Container
				style={{
					padding: 20,
				}}
			>
				<Row>
					<Col
						md={{ span: 3, offset: 1 }}
						lg={{ span: 2, offset: 1 }}
						style={{
							padding: 20,
						}}
					>
						<Image
							src={ImageQR}
							layout="intrinsic"
							objectFit="contain"
						/>
					</Col>
					<Col
						md={{ span: 7 }}
						lg={{ span: 8 }}
						style={{
							padding: 20,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<p
							style={{
								width: "100%",
								fontSize: 40,
								color: "white",
								marginBottom: 0,
								fontWeight: 500,
							}}
						>
							Got a Special Craving or a Small Event?
						</p>
						<p
							style={{
								width: "100%",
								fontSize: 20,
								marginBottom: 20,
								color: "white",
							}}
						>
							Browse this IG account and let us know if you like
							anything (min. 5 pax order)
						</p>
						<div className="Toggle" style={{ background: "white" }}>
							<a
								className="Text--toggle"
								style={{ color: "#fe706d" }}
								href="https://www.instagram.com/tay.cooks/"
								target="_blank"
								rel="noreferrer"
							>
								Open in Instagram
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
