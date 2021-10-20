import express, { Application } from "express";
import morgan from "morgan";
import {Routes} from '../routes/index'

export class App{
    app : Application;
    public RoutePrv: Routes = new Routes();

    constructor(
        private port? : number | string
    ){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    private settings(){
        this.app.set('port', this.port || 3000)
    }

    private routes(){
        this.RoutePrv.mantenimientoRoutes.routes(this.app);
        this.RoutePrv.equipoRoutes.routes(this.app);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server On Port', this.app.get('port'));
    }
}