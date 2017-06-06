import $ from 'jquery';
import {FleetDataService} from './services/FleetDataService';
import {fleet} from './data/fleet';
import {BaseApp} from './app/BaseApp';
import {HomePage} from './app/pages/HomePage';
import {CarsPage} from './app/pages/CarsPage';
import {DronesPage} from './app/pages/DronesPage';
import {MapPage} from './app/pages/MapPage';
import {BaseRouter} from './app/BaseRouter';
import {TitleBar} from './app/elements/TitleBar';

export class App extends BaseApp {

    constructor() {
        super("Fleet Manager");

        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        let navbar = new TitleBar("Fleet Manager");

        this.router = new BaseRouter(navbar);
        this.router.addRoute("Home", new HomePage(), true);
        this.router.addRoute("Cars", new CarsPage());
        this.router.addRoute("Drones", new DronesPage());
        this.router.addRoute("Map", new MapPage());
        this.router.activateRoute("Home");

    }
}

export let application = new App();
