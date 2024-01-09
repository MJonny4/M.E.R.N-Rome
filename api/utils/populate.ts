import { faker } from "@faker-js/faker";
import Hotel from "../models/Hotel";

export const populateDb = async () => {
	for (let i = 0; i < 20; i++) {
		const hotel = Hotel.build({
			name: faker.company.name(),
			description: faker.lorem.words(50),
			stars: faker.number.int({ min: 1, max: 5 }),
			address: faker.location.streetAddress(true),
			city: faker.location.city(),
			country: faker.location.country(),
			phone: faker.phone.number(),
			email: faker.internet.email(),
			// array of 4 photos
			photos: [
				faker.image.url(),
				faker.image.url(),
				faker.image.url(),
				faker.image.url(),
			],
		});

		await hotel.save();
	}
};

export default populateDb;
