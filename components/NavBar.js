import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import ImageLogo from "../assets/lafb_light.png";

export default function NavBar() {
	return (
		<Navbar
			expand="lg"
			style={{
				background: "white",
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: 5,
			}}
		>
			<Container>
				<Link href="/">
					<Navbar.Brand style={{ cursor: "pointer" }}>
						<Image src={ImageLogo} height={55} width={87} />
					</Navbar.Brand>
				</Link>

				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					style={{ outline: "none", border: "none" }}
				/>
				<Navbar.Collapse className="justify-content-end">
					<Nav style={{ display: "flex", alignItems: "center" }}>
						<Nav.Link
							href="/"
							style={{
								paddingLeft: 20,
								paddingRight: 20,
								fontSize: 17,
							}}
						>
							HOME
						</Nav.Link>
						<Nav.Link
							href="/menu"
							style={{
								paddingLeft: 20,
								paddingRight: 20,
								fontSize: 17,
							}}
						>
							MENU
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
