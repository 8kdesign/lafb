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
						md={{ span: 2, offset: 1 }}
						style={{
							padding: 20,
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Image
							src={ImageQR}
							layout="intrinsic"
							objectFit="contain"
						/>
					</Col>
					<Col
						md={{ span: 8 }}
						style={{
							padding: 20,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<p
							style={{
								width: "100%",
								textAlign: "center",
								fontSize: 40,
								color: "white",
								marginBottom: 20,
								fontWeight: 500,
							}}
						>
							Got a Special Craving or a Small Event?
						</p>
						<p
							style={{
								width: "100%",
								textAlign: "center",
								fontSize: 20,
								color: "white",
							}}
						>
							Browse this IG account and let us know if you like
							anything (min. 5 pax order)
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
