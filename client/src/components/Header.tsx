import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaPlus,
	FaSearch,
	FaShoppingBasket,
	FaUserCircle,
	FaBars,
	FaTimes,
	FaInstagram,
	FaTwitter,
	FaFacebookSquare,
} from "react-icons/fa";

import navJson from "../assets/data/nav.json";

export default function Header() {
	const icons = [
		{ icon: <FaSearch />, id: 1 },
		{ icon: <FaShoppingBasket />, id: 2 },
		{ icon: <FaUserCircle />, id: 3 },
	];

	const icons2 = [
		{ icon: <FaInstagram />, id: 1 },
		{ icon: <FaTwitter />, id: 2 },
		{ icon: <FaFacebookSquare />, id: 3 },
	];
	const [isNavOpen, setIsNavOpen] = useState({
		menu: false,
		tours: true,
	});

	const handleMenu = () => {
		setIsNavOpen({ ...isNavOpen, menu: !isNavOpen.menu });
	};

	return (
		<header className="flex flex-col h-[28rem] px-16 font-roboto">
			<section className="flex flex-row justify-between items-start pt-4">
				<div className="flex flex-row gap-2 justify-center items-start">
					<div className="border-t-2 border-white w-8 mt-3"></div>
					<div className="font-semibold text-white">
						<p>travel@ximuntion.dev</p>
						<p>Call: +34 634204198</p>
					</div>
				</div>
				<h1 className="font-satisfy text-white first-letter:text-rose-900 text-6xl pt-2">
					Chilling
				</h1>
				<div className="flex flex-row gap-2 justify-center items-start h-1">
					<div className="border-t-2 border-rose-900 w-8 mt-3"></div>
					<nav className="w-24 text-rose-900">
						<button
							type="button"
							onClick={handleMenu}
							className="flex flex-row gap-1 items-center font-semibold hover:text-roma2 transition duration-300 ease-in-out"
						>
							MENU{" "}
							{isNavOpen.menu ? (
								<FaTimes className="text-sm" />
							) : (
								<FaBars className="text-sm" />
							)}
						</button>
						<AnimatePresence mode="wait">
							{isNavOpen.menu && (
								<motion.ul
									className="pl-4 flex flex-col gap-1 font-medium"
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3 }}
								>
									{navJson.map((item) => (
										<li key={item.id}>
											{item.name === "TOUR" ? (
												<button
													type="button"
													onClick={() =>
														setIsNavOpen({
															...isNavOpen,
															tours: !isNavOpen.tours,
														})
													}
													className="flex flex-row gap-1 items-center hover:text-roma2 transition duration-300 ease-in-out"
												>
													TOUR{" "}
													{isNavOpen.tours ? (
														<FaTimes className="text-sm" />
													) : (
														<FaPlus className="text-sm" />
													)}
												</button>
											) : (
												<li
													key={item.id}
													className="hover:text-roma2 transition duration-300 ease-in-out"
												>
													{item.name}
												</li>
											)}
											{item["sub-menus"] && isNavOpen.tours && (
												<motion.ul
													className="pl-4"
													initial={{ opacity: 0, x: -100 }}
													animate={{ opacity: 1, x: 0 }}
													exit={{ opacity: 0, x: -100 }}
													transition={{ duration: 0.3, ease: "easeInOut" }}
												>
													{item["sub-menus"].map((subItem) => (
														// TODO: ADD A LINK TO THE SUBITEMS
														<li
															key={subItem.id}
															className="hover:text-roma2 transition duration-300 ease-in-out"
														>
															{subItem.name}
														</li>
													))}
												</motion.ul>
											)}
										</li>
									))}
									{icons.map((icon) => (
										<li
											key={icon.id}
											className="self-center text-lg my-2 hover:text-roma2 transition duration-300 ease-in-out"
										>
											{icon.icon}
										</li>
									))}
								</motion.ul>
							)}
						</AnimatePresence>
					</nav>
				</div>
			</section>
			<section className="flex flex-row gap-2 relative top-[10%] left-0 w-fit">
				<div className="flex flex-col pl-2">
					{icons2.map((icon) => (
						<li
							key={icon.id}
							className="text-white hover:text-rose-900 transition duration-500 ease-in-out text-xl my-1 -rotate-90
                        hover:scale-150 hover:rotate-0 list-none"
						>
							{icon.icon}
						</li>
					))}

					<div className="border-l-4 border-white h-8 ml-2 mt-1"></div>
					<div className="border-l-4 border-white h-8 ml-2"></div>
					<div className="border-l-4 border-white h-8 ml-2"></div>
				</div>
				<div className="flex flex-col gap-2 p-10 ">
					<p className="font-satisfy text-6xl text-center text-rose-900">
						in Rome
					</p>
					<button
						type="button"
						className="
                        bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
					>
						Booking trip for 199€
					</button>
				</div>
			</section>
			<section className="relative bottom-[-1px] h-full -mx-16">
				<div
					className="absolute bottom-0 h-20 w-full bg-separator 
                bg-cover bg-center bg-no-repeat
                "
				></div>
			</section>
		</header>
	);
}
