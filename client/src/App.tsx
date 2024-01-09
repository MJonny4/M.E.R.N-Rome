import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
const Home = lazy(() => import("./pages/Home"));

const App = () => {
	return (
		<BrowserRouter>
			{/* Header */}
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
