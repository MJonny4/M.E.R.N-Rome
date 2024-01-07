import { DataTypes, Model, Sequelize } from 'sequelize'

class HotelFacilities extends Model {
    public id!: number
    public hotelId!: number // Foreign key: hotelId
    public pool!: boolean
    public spa!: boolean
    public gym!: boolean
    public restaurant!: boolean
}

export const initHotelFacilities = (sequelize: Sequelize) => {
    HotelFacilities.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            hotelId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'hotels',
                    key: 'id',
                },
            },
            pool: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            spa: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            gym: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            restaurant: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            tableName: 'hotelFacilities',
            sequelize: sequelize, // passing the `sequelize` instance is required
            timestamps: true,
        }
    )
}

export default HotelFacilities
