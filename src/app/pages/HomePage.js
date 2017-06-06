import {BasePage} from '../BasePage';
import {Image} from '../elements/Image.js';
import {Button} from '../elements/Button.js';
import {application} from '../../index.js';

export class HomePage extends BasePage {
    
    constructor() {
        super();
        this.id = "Home";
    }
    
    create() {
        super.create();
        
        let i = new Image('../images/drone.jpg');
        /** this.element refers to getHTMLContent()*/
        i.addTo(this.element);
       
        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
        let b = new Button('Self Driving Cars');
        b.style = styleString;
        b.addTo(this.element);
        b.element.click(() => application.router.activateRoute('Cars'));
         
        b = new Button('Drones');
        b.style = styleString;
        b.addTo(this.element);
        b.element.click(() => application.router.activateRoute('Drones'));
    }
    
    getHTMLContent() {
        return `<div style="text-align: center;"></div>`;
    }
}