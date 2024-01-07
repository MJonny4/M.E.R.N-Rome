import { DataTypes, Model, Sequelize } from 'sequelize'

class User extends Model {
    public id!: number
    public name!: string
    public surname!: string
    public email!: string
    public phone!: string
    public password!: string
    public gender!: string
    public birthday!: Date
    public role!: string
}

export const initUser = (sequelize: Sequelize) => {
    User.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            surname: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            email: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            phone: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            password: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            gender: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
            birthday: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            role: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'users',
            timestamps: true,
        }
    )
}

export default User
