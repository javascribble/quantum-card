import { Component, template } from '../../references/quantum.js';
import html from '../templates/card.js';

export class Card extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-card', Card);