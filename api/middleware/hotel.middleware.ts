import { body, validationResult } from "express-validator";

export const validateCreateHotelInput = [
	body("name").trim().isLength({ min: 1 }).withMessage("Name is required"),
	body("description")
		.trim()
		.isLength({ min: 1 })
		.withMessage("Description is required"),
	body("stars")
		.trim()
		.isInt({ min: 1, max: 5 })
		.withMessage("Stars must be between 1 and 5"),
	body("address")
		.trim()
		.isLength({ min: 1 })
		.withMessage("Address is required"),
	body("city").trim().isLength({ min: 1 }).withMessage("City is required"),
	body("country")
		.trim()
		.isLength({ min: 1 })
		.withMessage("Country is required"),
	body("phone").trim().isLength({ min: 1 }).withMessage("Phone is required"),
	body("email").trim().isLength({ min: 1 }).withMessage("Email is required"),
	body("photos")
		.isArray({ min: 1 })
		.withMessage("At least one photo is required"),
];
