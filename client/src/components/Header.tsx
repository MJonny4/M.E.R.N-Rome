import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import { FaBars, FaTimes, FaPlus } from "react-icons/fa";

import navJson from "../assets/data/nav.json";
import {
	menuIcons as icons,
	socialIcons as icons2,
} from "../assets/data/icons";

export default function Header() {
	const [isMobile, setIsMobile] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState({
		menu: false,
		tours: true,
	});

	const handleMenu = () => {
		setIsNavOpen({ ...isNavOpen, menu: !isNavOpen.menu });
		// control if is Mobile and isOpenNav then do a slide down animation of an overlay with the menu
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsMobile(true);
				setIsNavOpen({ menu: false, tours: true });
			} else {
				setIsMobile(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="flex flex-col h-[28rem] px-8 md:px-16 font-roboto">
			<section className="flex flex-row justify-between items-start pt-2 md:pt-4">
				<div className="hidden md:flex md:flex-row md:gap-2 md:justify-center md:items-start">
					<div className="border-t-2 border-white w-8 mt-3"></div>
					<div className="font-semibold text-white">
						<p>travel@ximuntion.dev</p>
						<p>Call: +34 634204198</p>
					</div>
				</div>
				<h1 className="font-satisfy text-white first-letter:text-rose-900 text-6xl pt-2 font-medium w-full text-center order-last md:order-none">
					Chilling
				</h1>
				{!isMobile ? (
					<div className="hidden md:flex md:flex-row md:gap-2 md:justify-center md:items-start md:h-1">
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
				) : (
					// TODO: ADD A LINK TO THE SUBITEMS
					<div className="flex flex-row gap-2 justify-center items-center order-first w-8 h-16">
						<button
							type="button"
							onClick={handleMenu}
							className="flex flex-row gap-1 text-white items-center font-semibold hover:text-rose-900 transition duration-300 ease-in-out"
						>
							{isNavOpen.menu ? (
								<FaTimes className="text-2xl" />
							) : (
								<FaBars className="text-2xl" />
							)}
						</button>
						<AnimatePresence>
							{isNavOpen.menu && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="modal-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 p-14"
								>
									<div className="modal-content flex flex-col gap-2 justify-center items-center h-1/3 bg-white">
										<button
											type="button"
											className="text-black text-2xl self-start pl-16"
											onClick={handleMenu}
										>
											<FaTimes className="text-2xl" />
										</button>
										<nav className="flex flex-col gap-4 justify-center items-center font-semibold">
											{navJson.map((item) => (
												<button
													key={item.id}
													className="hover:text-roma2 transition duration-300 ease-in-out"
												>
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
															className="hover:text-roma2 transition duration-300 ease-in-out list-none"
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
															transition={{
																duration: 0.3,
																ease: "easeInOut",
															}}
														>
															{item["sub-menus"].map((subItem) => (
																<li
																	key={subItem.id}
																	className="hover:text-roma2 transition duration-300 ease-in-out"
																>
																	{subItem.name}
																</li>
															))}
														</motion.ul>
													)}
												</button>
											))}
										</nav>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				)}
			</section>
			{!isMobile ? (
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
			) : (
				<section className="flex flex-col gap-2 w-full">
					<div className="flex flex-col gap-8 p-10 ">
						<p className="font-bold text-5xl text-center text-white">
							All roads lead to
						</p>
						<p className="font-satisfy font-medium text-rose-900 text-center text-7xl">
							Rome
						</p>
						<button
							type="button"
							className="
                        bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out w-1/2 self-center"
						>
							Booking trip for 199€
						</button>
					</div>
				</section>
			)}
			<section className="relative bottom-[-1px] h-full -mx-8 md:-mx-16">
				<div
					className="absolute bottom-0 h-20 w-full bg-separator 
                bg-cover bg-center bg-no-repeat
                "
				></div>
			</section>
		</header>
	);
}
