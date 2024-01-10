export default function MStep1() {
	return (
		<section className="plan w-full">
			<article className="w-full flex justify-center items-start h-44">
				<div className="relative top-0 -left-48">
					<span className="absolute top-0 left-3 text-9xl text-roma2 font-bold z-10">
						1.
					</span>
					<p className="absolute top-14 left-0 text-4xl text-rose-900 font-bold z-20">
						TOURS
					</p>
				</div>
				<div className="relative top-0 left-10">
					<span className="absolute top-0 left-3 text-9xl text-roma2 font-bold z-10">
						2.
					</span>
					<p className="absolute top-14 left-0 text-4xl text-rose-900 font-bold z-20">
						HOTELS
					</p>
				</div>
			</article>
			<article
				className="bg-marcoAurelio w-full h-full relative p-10"
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="overlay absolute top-0 left-0 w-full h-full bg-rose-900 bg-opacity-50 z-10"></div>
				<div className="relative h-full flex flex-row justify-center gap-2 z-20">
					<div className="border-t-4 mt-6 w-16"></div>
					<p className="text-semibold text-5xl text-white text-center">
						PLAN YOUR <span className="font-satisfy">Trip</span>
					</p>
				</div>
				<form action="" className="relative h-full flex flex-col gap-2 z-20">
					<label
						htmlFor="city"
						className="text-white text-2xl font-semibold font-satisfy"
					>
						Where
					</label>
					<input
						type="text"
						name="city"
						id="city"
						className="border-2 border-rose-900 rounded-2xl p-2"
					/>
					<label
						htmlFor="checkIn"
						className="text-white text-2xl font-semibold font-satisfy pt-6"
					>
						When
					</label>
					<input
						type="date"
						name="checkIn"
						id="checkIn"
						className="border-2 border-rose-900 rounded-2xl p-2"
					/>
					<input
						type="date"
						name="checkOut"
						id="checkOut"
						className="border-2 border-rose-900 rounded-2xl p-2"
					/>
					<label
						htmlFor="style"
						className="text-white text-2xl font-semibold font-satisfy pt-6"
					>
						Which of styles
					</label>
					{/* selector values: ["classic", "modern", "luxury", "urban"], */}
					<select
						name="style"
						id="style"
						className="border-2 border-rose-900 rounded-2xl p-2"
					>
						<option value="classic">Classic</option>
						<option value="modern">Modern</option>
						<option value="luxury">Luxury</option>
						<option value="urban">Urban</option>
					</select>
					<label
						htmlFor="budget"
						className="text-white text-2xl font-semibold font-satisfy pt-6"
					>
						How much
					</label>
					<input
						type="number"
						name="budget"
						id="budget"
						min={10}
						max={10000}
						step={10}
						className="border-2 border-rose-900 rounded-2xl p-2"
					/>
				</form>
			</article>
		</section>
	);
}
