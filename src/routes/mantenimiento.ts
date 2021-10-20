import {Request, Response, Application} from 'express';
import {MantenimientoController} from '../controllers/mantenimiento.controller';

export class MantenimientoRoutes {
    public mantenimientoController: MantenimientoController = new MantenimientoController();

    public routes(app: Application):void{
        app.route('/mantenimiento').get(this.mantenimientoController.getMantenimiento);
    }
}