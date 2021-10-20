import {Request, Response} from 'express';
import {Equipo} from '../models/Equipo';

export class EquipoController{
    public async getEquipo(req: Request, res:Response){
        try {
            const equipo = await Equipo.findAll()
            if(!equipo){
                res.status(400).json ({msg: 'Equipo invalido'})
            }
            return res.status(200).json({equipo})
        } catch (error) {
            res.status(500).json({msg: 'Error interno'})
        }
    }
}