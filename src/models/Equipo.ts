import sequelize, {Model, DataType, DataTypes} from 'sequelize';
import {database} from '../database/db';
import {Mantenimiento} from './Mantenimiento'

export class Equipo extends Model {
    public marca! : string;
    public modelo! : string;
}

export interface EquipoI {
    marca: string;
    modelo: string;
}

Equipo.init(
    {
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull:false
        },
    },
    {
        tableName: "equipo",
        sequelize: database,
        timestamps: true
    }
);

Equipo.hasMany(Mantenimiento);
Mantenimiento.belongsTo(Equipo);