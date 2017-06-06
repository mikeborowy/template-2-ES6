import {BaseElement} from './BaseElement';

export class BaseNav extends BaseElement{

    constructor(title){
        super(title);
        
        this.title = title;
        let _title = this.title;

        this.id = "";
        let _links = [];
    }

     /**
     *
     * @param (name: string, ahref: string)
     */
    addLink(title, href) {

        if(!this.links)
            this.links = [];

        this.links.push({title, href});
        
        this.destoyer();
    }

    removeLink(linktitle) {
        this
            .links
            .find((link, i) => {

                if (link.title === linktitle) {
                    this
                        .links
                        .splice(i, 1);
                    this.destoyer();
                }
            });
    }

     /**
     * GETTERS / SETTERS
     */
    get title() {
        return this._title;
    }

    set title(string) {
        this._title = string;
        this.destoyer();
    }

    get links() {
        return this._links;
    }
    set links(array) {

        this._links = array;
        this.destoyer();
    }

}