import {BaseNav} from '../BaseNav';
import {componentHandler} from 'material-design-lite';

export class TitleBar extends BaseNav {

    constructor(title) {
        super(title);

        this.title = title;
        this.id = "navBar";
        this.links = [];
    }

    //enables material-design-lite javascript
    // enableJS(){
    //     componentHandler.upgradeElement();
    // }

    getHTMLContent() {

        let linkHTML = '';
        for (let l of this.links) {
            linkHTML += `<a class="mdl-navigation__link">${l.title}</a>\n`;
        }

        return `
            <div id="${this.id}">
                <!-- Always shows a header, even in smaller screens. -->
                <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">${this.title}</span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation. We hide it in small screens. -->
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        ${linkHTML}
                    </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${this.title}</span>
                    <nav class="mdl-navigation">
                        ${linkHTML}
                    </nav>
               
            </div>
        `;
    }

   
 }