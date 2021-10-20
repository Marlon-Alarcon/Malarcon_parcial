import {Request, Response, Application} from 'express';
import {EquipoController} from '../controllers/equipo.controller';

export class EquipoRoutes {
    public equipoController: EquipoController = new EquipoController();

    public routes(app: Application):void{
        app.route('/equipo').get(this.equipoController.getEquipo);
    }
}