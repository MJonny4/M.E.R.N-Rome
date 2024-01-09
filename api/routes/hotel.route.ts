import { Router } from "express";

import {
	getAllHotels,
	createHotel,
	updateHotel,
} from "../controllers/hotel.controller";

import { validateCreateHotelInput } from "../middleware/hotel.middleware";

const router = Router();

router.get("/all-hotels", getAllHotels);
router.post("/create-hotel", validateCreateHotelInput, createHotel);
router.put("/update-hotel/:id", validateCreateHotelInput, updateHotel);

export default router;
