import Image from "next/image";
import ImageBanner from "../../assets/banner.jpg";

export default function Banner() {
	return (
		<Image
			className="Banner"
			src={ImageBanner}
			layout="intrinsic"
			objectFit="cover"
			height={1000}
		/>
	);
}
