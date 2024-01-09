import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import expressDebug from "express-debug";
import { Sequelize } from "sequelize";

// Import routers
import hotelRouter from "./routes/hotel.route";

// Import models
import { initHotel } from "./models/Hotel";
import { initUser } from "./models/User";
import { initHotelFacilities } from "./models/HotelFacilities";
import { initHotelRoom } from "./models/HotelRoom";
import { initBooking } from "./models/Booking";

const PORT = 8175;
const app = express();
dotenv.config();

// Initialize middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

// Initialize Sequelize
const sequelize = new Sequelize(
	process.env.DB_DATABASE || "",
	process.env.DB_USERNAME || "",
	process.env.DB_PASSWORD || "",
	{
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT) || 5432,
		dialect: process.env.DB_DIALECT as "postgres",
	},
);

// Initialize models
initHotel(sequelize);
initUser(sequelize);
initHotelRoom(sequelize);
initHotelFacilities(sequelize);
initBooking(sequelize);

// Initialize database
// import  populateDb  from './utils/populate'

sequelize
	.sync({
		// force: true, //! Uncomment the first time
	})
	.then(() => {
		// populateDb()
		console.log(
			`Connected to database ${sequelize.getDatabaseName()} successfully!\n`,
		);
	})
	.catch((err: unknown) => {
		const error = err as Error;
		console.error("Unable to connect to the database:", error.message);
	});

// Initialize routers
app.use("/api/v1/hotels", hotelRouter);

// Initialize express-debug
expressDebug(app, {});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}\n`);
});
