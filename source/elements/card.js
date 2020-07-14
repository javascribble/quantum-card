import { Component } from '../../references/quantum.js';

export class Card extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-card');

    static attributes = [];
}

customElements.define('quantum-card', Card);