export default function DStep1() {
	return (
		<section className="w-full flex flex-row justify-center mt-16">
			<article
				className="bg-marcoAurelio w-full h-full relative p-10"
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="overlay absolute top-0 left-0 w-full h-full bg-rose-900 bg-opacity-50 z-10"></div>
				<div className="relative h-full flex flex-row justify-center gap-2 z-20">
					<div className="border-t-4 mt-6 w-20"> </div>
					<p className="text-semibold text-5xl text-white text-center pl-4">
						PLAN YOUR{" "}
						<span className="font-satisfy text-roma2 text-6xl pl-2">Trip</span>
					</p>
				</div>
				<form action="" className="relative h-full flex flex-col gap-2 z-20">
					<div className="flex flex-row items-start justify-between">
						<div className="flex flex-col w-full p-5">
							<label
								htmlFor="city"
								className="text-roma2 text-2xl font-semibold font-satisfy"
							>
								Where
							</label>
							<input
								type="text"
								name="city"
								id="city"
								className="border-2 border-rose-900 rounded-2xl p-2"
							/>
						</div>
						<div className="flex flex-col w-full p-5">
							<label
								htmlFor="checkIn"
								className="text-roma2 text-2xl font-semibold font-satisfy"
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
						</div>
					</div>
					<div className="flex flex-row items-start justify-between">
						<div className="flex flex-col w-full p-5">
							<label
								htmlFor="style"
								className="text-roma2 text-2xl font-semibold font-satisfy"
							>
								Which of styles
							</label>
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
						</div>
						<div className="flex flex-col w-full p-5">
							<label
								htmlFor="budget"
								className="text-roma2 text-2xl font-semibold font-satisfy"
							>
								How much
							</label>
							<input
								type="number"
								name="budget"
								id="budget"
								className="border-2 border-rose-900 rounded-2xl p-2"
							/>
						</div>
					</div>
					<button className="bg-roma2 text-rose-900 border border-rose-900 font-semibold font-roboto text-2xl rounded-2xl p-2 w-1/4 mx-auto">
						Search
					</button>
				</form>

				<p></p>
			</article>
			<article className="w-full">
				<div>
					<div>
						<span>HELLO</span>
						<p></p>
					</div>
					<div>
						<span>
							<p></p>
						</span>
					</div>
				</div>
				<div></div>
			</article>
		</section>
	);
}
