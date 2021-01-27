import html from '../templates/card.js';

const { Component, template, define } = quantum;

export class Card extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-card', Card);