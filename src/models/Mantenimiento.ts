import sequelize, {Model, DataType, DataTypes} from 'sequelize';
import {database} from '../database/db';

export class Mantenimiento extends Model {
    public fecha! : Date;
    public descripcion! : string;
    public resultado! : Boolean;
}

export interface MantenimientoI {
    fecha: Date;
    descripcion: string;
    resultado: Boolean;
}

Mantenimiento.init(
    {
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resultado: {
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
    },
    {
        tableName: "mantenimiento",
        sequelize: database,
        timestamps: true
    }
);