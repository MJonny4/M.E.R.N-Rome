import { DataTypes, Model, Sequelize } from "sequelize";
import Hotel from "./Hotel";
import User from "./User";
import HotelRoom from "./HotelRoom";

class Booking extends Model {
	public id!: number;
	public hotelId!: number; // Foreign key: hotelId
	public userId!: number; // Foreign key: userId
	public roomId!: number; // Foreign key: roomId

	public payed!: boolean;
	public checkIn!: Date;
	public checkOut!: Date;
}

export const initBooking = (sequelize: Sequelize) => {
	const Booking = sequelize.define(
		"booking",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				validate: {
					notEmpty: true,
				},
			},
			hotelId: {
				type: DataTypes.UUID,
				allowNull: false,
				references: {
					model: "hotels",
					key: "id",
				},
			},
			userId: {
				type: DataTypes.UUID,
				allowNull: false,
				references: {
					model: "users",
					key: "id",
				},
			},
			roomId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "hotelRooms",
					key: "id",
				},
			},
			payed: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			checkIn: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			checkOut: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
		},
		{
			tableName: "bookings",
			timestamps: true,
		},
	);
};

export default Booking;
