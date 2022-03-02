import { Facebook, Instagram } from "react-bootstrap-icons";

export default function Footer() {
	return (
		<div
			style={{
				padding: 20,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<a
					href="https://www.facebook.com/Love-at-First-Bite-Cafe-Toa-Payoh-101845898999392/"
					target="_blank"
					rel="noreferrer"
				>
					<Facebook className="ToggleSocial" />
				</a>
				<div className="Buffer--20px" />
				<a
					href="https://www.instagram.com/lafb_cafe/"
					target="_blank"
					rel="noreferrer"
				>
					<Instagram className="ToggleSocial" />
				</a>
			</div>
			<div className="Buffer--20px" />
			<p style={{ opacity: "75%", textAlign: "center", margin: 0 }}>
				© 2022 Love At First Bite
			</p>
		</div>
	);
}
