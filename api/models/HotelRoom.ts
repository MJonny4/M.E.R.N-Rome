import { DataTypes, Model, Sequelize } from "sequelize";

class HotelRoom extends Model {
	public id!: number;
	public hotelId!: number; // Foreign key: hotelId
	public description!: string;
	public roomNumber!: number;
	public price!: number;
	public floor!: number;
	public available!: boolean;
	public type!: string;
	public style!: string;
	public discount!: number;
	public photos!: string[];
}

export const initHotelRoom = (sequelize: Sequelize) => {
	const HotelRoom = sequelize.define(
		"hotelRoom",
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
			description: {
				type: new DataTypes.STRING(1024),
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			roomNumber: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			floor: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true,
					isInt: true,
					min: 1,
					max: 3,
				},
			},
			available: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			type: {
				type: DataTypes.ENUM,
				values: ["single", "double", "family"],
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			style: {
				type: DataTypes.ENUM,
				values: ["classic", "modern", "luxury", "urban"],
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			discount: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			photos: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
		},
		{
			tableName: "hotelRooms",
			timestamps: true,
			modelName: "HotelRoom",
		},
	);
};

export default HotelRoom;
