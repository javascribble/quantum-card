import html from '../templates/card.js';

export class Card extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-card', Card);