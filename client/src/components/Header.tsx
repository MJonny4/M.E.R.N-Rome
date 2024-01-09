export default function Header() {
	return (
		<header className="flex flex-col bg-slate-500 h-96 px-16">
			<section className="flex flex-row justify-between items-center">
				<div className="flex flex-row gap-2 justify-center items-start">
					<div className="border-t-2 border-white w-8 mt-3"></div>
					<div className="font-semibold text-white">
						<p>travel@ximuntion.dev</p>
						<p>Call: +34 634204198</p>
					</div>
				</div>
				<h1 className="font-satisfy text-white first-letter:text-rose-900 text-6xl pt-6">
					Chilling
				</h1>
				<div className="flex flex-row gap-2 justify-center items-start">
					<div className="border-t-2 border-white w-8 mt-3"></div>
					<nav className="font-semibold text-white">
						<p>MENU +</p>
						<ul>
							<li>
								<a href="#">TOUR +</a>
								<ul>
									<li>
										<a href="#">HOTEL</a>
									</li>
									<li>
										<a href="#">EVENT</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">BLOG</a>
							</li>
							<li>
								<a href="#">ABOUT</a>
							</li>
						</ul>
					</nav>
				</div>
			</section>
			<section className="">
				<div className=""></div>
				<div className=""></div>
			</section>
		</header>
	);
}
