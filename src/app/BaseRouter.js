import $ from 'jquery';
import {BaseNav} from './BaseNav';

export class BaseRouter {

    constructor(navbar) {

        this.routeMap = {};
        this.defaultRoute = null;
        this.pageContainer = $('.page-content');
        this.navbar = navbar;

        if (navbar) {
            this.navbar = navbar;
            navbar.addTo($('.page-nav'));
        }
    }

    addRoute(pageName, pageObject, defaultRoute = false) {

        if (this.navbar) {
            this
                .navbar
                .addLink(pageName, '');

            this
                .navbar
                .element
                .find('.mdl-navigation__link')
                .click(evt => {

                    let route = (evt.target.innerHTML).trim();
                    this.activateRoute(route);
                });
        }

        this.routeMap[pageName] = pageObject;

        if (defaultRoute) {
            this.defaultRoute = pageName;
        }
    }

    activateRoute(route) {

        this
            .pageContainer
            .empty();

        this
            .routeMap[route]
            .addTo(this.pageContainer);
    }
}