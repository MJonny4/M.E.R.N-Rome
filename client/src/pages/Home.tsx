// import MStep1 from "../components/mobile/MStep1";
import DStep1 from "../components/desktop/DStep1";
import { useEffect, useState } from "react";

export default function Home() {
	// const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<main className="px-16 w-full">
			{/* <MStep1 /> */}
			{/* TODO: DO DESKTOP VERSION */}
			<DStep1 />
		</main>
	);
}
