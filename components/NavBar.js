import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ImageLogo from "../assets/lafb_light.png";

var previousY = 0;

export default function NavBar() {
	const [show, setShow] = useState(true);

	useEffect(() => {
		function checkHide() {
			const newY = window.scrollY;
			if (newY > 88 && newY >= previousY) {
				setShow(false);
			} else {
				setShow(true);
			}
			previousY = newY;
		}
		window.addEventListener("scroll", checkHide);
		return () => {
			window.removeEventListener("scroll", checkHide);
		};
	}, []);

	function getTranslate() {
		if (show) {
			return "translateY(-0px)";
		} else {
			return "translateY(-300px)";
		}
	}

	return (
		<Navbar
			expand="lg"
			style={{
				background: "white",
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: 5,
				boxShadow: "0px 0px 1px #aaaaaa",
				transform: getTranslate(),
				transition: "0.3s ease-in-out",
			}}
		>
			<Container>
				<Link href="/">
					<Navbar.Brand style={{ cursor: "pointer" }}>
						<Image src={ImageLogo} height={44} width={64.8} />
					</Navbar.Brand>
				</Link>

				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					style={{ outline: "none", border: "none" }}
				/>
				<Navbar.Collapse className="justify-content-end">
					<Nav>
						<Nav.Link
							href="/"
							style={{
								width: "100%",
								textAlign: "center",
								paddingLeft: 20,
								paddingRight: 20,
								fontSize: 17,
								fontWeight: 500,
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="/menu"
							style={{
								width: "100%",
								textAlign: "center",
								paddingLeft: 20,
								paddingRight: 20,
								fontSize: 17,
								fontWeight: 500,
							}}
						>
							Menu
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
