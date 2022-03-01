import Head from "next/head";
import Banner from "../components/Banner";
import Location from "../components/Location";
import MenuPreview from "../components/MenuPreview";

export default function Home() {
	return (
		<div>
			<Head></Head>
			<Banner />
			<div className="Buffer--50px" />
			<Location />
			<div className="Buffer--50px" />
			<MenuPreview />
		</div>
	);
}
