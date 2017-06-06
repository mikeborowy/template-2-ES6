import {BaseNav} from './BaseNav';
import $ from 'jquery';

export class BaseApp {

    constructor(title) {

        this.title = title;

        const navbar = $('<nav class="page-nav">');
        //Create layout container
        const layout = $('<main class="mdl-layout__content">');
        //Create pages container
        const pageContainer =  $('<div class="page-content">');

        navbar.appendTo(layout);
        pageContainer.appendTo(layout);
        layout.appendTo($('#app'));
    }
}