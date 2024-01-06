import { DataTypes, Model, Sequelize } from 'sequelize'

class Hotel extends Model {
    public id!: number
    public name!: string
    public description!: string
    public stars!: number
    public address!: string
    public city!: string
    public country!: string
    public phone!: string
    public email!: string
    public photos!: string[]

    public readonly createdAt!: Date // Corrected: camelCase, why it has to be camelCase? Because Sequelize uses camelCase for timestamps
    public readonly updatedAt!: Date // Corrected: camelCase
}

export const initHotel = (sequelize: Sequelize) => {
    Hotel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            description: {
                type: new DataTypes.STRING(1024),
                allowNull: false,
            },
            stars: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            address: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            city: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            country: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            phone: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            email: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            photos: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },

            // ... other properties
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: 'hotels',
            sequelize: sequelize, // this bit is important
        }
    )
}

export default Hotel
